const { Usuario } = require('../models');
const UsuarioDTO = require('../dtos/usuario.dto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

exports.register = async (req, res) => {
  try {
    const { cpf, cursoId, name, email, password, ra, ensino_medio } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({
      cpf,
      cursoId,
      name,
      email,
      password: hashedPassword,
      ra,
      ensino_medio
    });
    const usuarioDTO = new UsuarioDTO(usuario);
    res.status(201).json(usuarioDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const match = await bcrypt.compare(password, usuario.password);
    if (!match) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }
    const token = jwt.sign({ cpf: usuario.cpf, email: usuario.email }, secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
