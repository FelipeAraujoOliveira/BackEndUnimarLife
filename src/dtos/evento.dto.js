class EventoDTO {
    constructor({ id, name, description, areaId, date_start, date_end, organizacoes }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.areaId = areaId;
      this.date_start = date_start;
      this.date_end = date_end;
      this.organizacoes = organizacoes;
    }
  }
  
  module.exports = EventoDTO;
  