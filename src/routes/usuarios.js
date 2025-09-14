const express = require('express');
const router = express.Router();

const {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuariosController');

// Endpoints
router.get('/', getUsuarios);        // GET /usuarios
router.post('/', createUsuario);     // POST /usuarios
router.put('/:id', updateUsuario);   // PUT /usuarios/:id
router.delete('/:id', deleteUsuario);// DELETE /usuarios/:id

module.exports = router;