const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const authenticateToken = require('../middleware/authenticateToken'); // Make sure to import the middleware

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, createTask);
router.get('/:id', authenticateToken, getTaskById);
router.patch('/:id', authenticateToken, updateTask);
router.delete('/:id', authenticateToken, deleteTask);

module.exports = router;
