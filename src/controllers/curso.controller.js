const { Curso } = require('../models');
const CursoDTO = require('../dtos/curso.dto');

exports.getAllCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    const cursosDTO = cursos.map(c => new CursoDTO(c));
    res.json(cursosDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCurso = async (req, res) => {
  try {
    const { name, areaId, duration } = req.body;
    const curso = await Curso.create({ name, areaId, duration });
    const cursoDTO = new CursoDTO(curso);
    res.status(201).json(cursoDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
