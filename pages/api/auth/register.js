import nc from 'next-connect';
import { register } from '../../../src/controllers/usuario.controller';

const handler = nc();

handler.post(async (req, res) => {
  await register(req, res);
});

export default handler;
