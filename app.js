const express = require('express');
const app = express();
const clientRoutes = require('./routes/clientRoutes');
const sequelize = require('./data/database');

app.use(express.json());
app.use('/clients', clientRoutes);

sequelize.sync().then(() => {
  console.log('Banco OK');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
