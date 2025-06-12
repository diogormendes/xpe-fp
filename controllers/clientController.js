const service = require('../services/clientService');

exports.list = async (req, res) => {
  const clients = await service.listAll();
  res.json(clients);
};

exports.findByID = async (req, res) => {
  const client = await service.findByID(parseInt(req.params.id));
  client ? res.json(client) : res.status(404).send('Client not found');
};

exports.findByName = async (req, res) => {
  const clients = await service.findByName(req.params.name);
  res.json(clients);
};

exports.count = async (req, res) => {
  try {
    const total = await service.count();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { name, email } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'The field "name" is required and must be a non-empty string.' });
  }
  if (typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ error: 'The field "email" is required and must be a non-empty string.' });
  }

  try {
    const client = await service.create({ name, email });
    res.status(201).json(client);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: err.errors.map(e => e.message) });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await service.update(parseInt(req.params.id), req.body);
    if (updated) {
      res.json({ message: 'Client updated successfully!', client: updated });
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.del = async (req, res) => {
  try {
    const success = await service.del(parseInt(req.params.id));
    if (success) {
      res.json({ message: 'Client deleted successfully!' });
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
