// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { User, Task } = require('../models');

router.post('/login', async (req, res) => {
  const { email, password_hash } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const isPasswordCorrect = bcrypt.compareSync(password_hash, user.password_hash);
    if (isPasswordCorrect) {
      res.status(200).json({ message: 'Login realizado com sucesso' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

router.post('/', async (req, res) => {
  try {
      const hashedPassword = await bcrypt.hash(req.body.password_hash, 10);
      const newUser = await User.create({
        ...req.body,
        password_hash: hashedPassword
      });
      res.status(201).json({ ...newUser.get(), password_hash: undefined });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { user_id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { user_id: req.params.id }
    });
    if (deleted) {
      res.status(204).send("Usuário deletado");
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id/tasks', async (req, res) => {
    try {
        const userId = req.params.id;
        const tasks = await Task.findAll({
            where: { user_id: userId }
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});





module.exports = router;
