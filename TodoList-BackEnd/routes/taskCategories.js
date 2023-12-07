const express = require('express');
const router = express.Router();

const { TaskCategory } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { task_id, category_id } = req.body;
    const newTaskCategory = await TaskCategory.create({ task_id, category_id });
    res.status(201).json(newTaskCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { task_id, category_id } = req.body;
    const deleted = await TaskCategory.destroy({
      where: { task_id, category_id }
    });
    if (deleted) {
      res.status(204).send("Associação entre tarefa e categoria removida");
    } else {
      res.status(404).json({ error: 'Associação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;