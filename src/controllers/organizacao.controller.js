const { Organizacao } = require('../models');
const OrganizacaoDTO = require('../dtos/organizacao.dto');

exports.getAllOrganizacoes = async (req, res) => {
  try {
    const organizacoes = await Organizacao.findAll();
    const organizacoesDTO = organizacoes.map(o => new OrganizacaoDTO(o));
    res.json(organizacoesDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrganizacao = async (req, res) => {
  try {
    const { name } = req.body;
    const organizacao = await Organizacao.create({ name });
    const organizacaoDTO = new OrganizacaoDTO(organizacao);
    res.status(201).json(organizacaoDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
