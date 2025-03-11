import nc from 'next-connect';
import { login } from '../../../src/controllers/usuario.controller';

const handler = nc();

handler.post(async (req, res) => {
  await login(req, res);
});

export default handler;
