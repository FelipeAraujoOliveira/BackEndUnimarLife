const { Area } = require('../models');
const AreaDTO = require('../dtos/area.dto');

exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.findAll();
    const areasDTO = areas.map(a => new AreaDTO(a));
    res.json(areasDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createArea = async (req, res) => {
  try {
    const { name } = req.body;
    const area = await Area.create({ name });
    const areaDTO = new AreaDTO(area);
    res.status(201).json(areaDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
