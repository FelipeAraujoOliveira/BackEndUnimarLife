class UsuarioDTO {
    constructor({ cpf, cursoId, name, email, ra, ensino_medio }) {
      this.cpf = cpf;
      this.cursoId = cursoId;
      this.name = name;
      this.email = email;
      this.ra = ra;
      this.ensino_medio = ensino_medio;
    }
  }
  
  module.exports = UsuarioDTO;
  