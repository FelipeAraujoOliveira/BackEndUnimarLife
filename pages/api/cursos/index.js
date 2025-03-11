import nc from 'next-connect';
import { getAllCursos, createCurso } from '../../../src/controllers/curso.controller';
import { authenticateJWT } from '../../../src/middleware/auth';

const handler = nc();

handler.get(async (req, res) => {
  await getAllCursos(req, res);
});

handler.post(authenticateJWT, async (req, res) => {
  await createCurso(req, res);
});

export default handler;
