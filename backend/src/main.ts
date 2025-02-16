import express from 'express';
import { prisma } from './config/db';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

const app = express();

app.get('/api', async (req, res) => {
  const users = await prisma.user.findMany();
  const emailOfFirstUser = users[0].email;
  res.send({ message: emailOfFirstUser });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
