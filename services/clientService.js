const Client = require('../models/client');

async function listAll() {
  return await Client.findAll();
}

async function findByID(id) {
  return await Client.findByPk(id);
}

async function findByName(name) {
  return await Client.findAll({
    where: {
      name: name
    }
  });
}

async function save(data) {
  return await Client.create(data);
}

async function update(id, data) {
  const client = await Client.findByPk(id);
  if (!client) return null;
  await client.update(data);
  return client;
}

async function del(id) {
  const client = await Client.findByPk(id);
  if (!client) return false;
  await client.destroy();
  return true;
}

async function count() {
  return await Client.count();
}

module.exports = {
  listAll,
  findByID,
  findByName,
  create: save,
  save,
  update,
  del,
  count
};
