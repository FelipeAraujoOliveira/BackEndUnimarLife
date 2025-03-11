const { Evento, Organizacao } = require('../models');
const EventoDTO = require('../dtos/evento.dto');

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll({
      include: [{ model: Organizacao, as: 'organizacoes' }]
    });
    const eventosDTO = eventos.map(e => new EventoDTO(e));
    res.json(eventosDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEvento = async (req, res) => {
  try {
    const { name, description, areaId, date_start, date_end, organizacoes } = req.body;
    const evento = await Evento.create({ name, description, areaId, date_start, date_end });
  
    if (organizacoes && organizacoes.length) {
      await evento.setOrganizacoes(organizacoes);
    }
    const eventoWithOrg = await Evento.findOne({
      where: { id: evento.id },
      include: [{ model: Organizacao, as: 'organizacoes' }]
    });
    const eventoDTO = new EventoDTO(eventoWithOrg);
    res.status(201).json(eventoDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
