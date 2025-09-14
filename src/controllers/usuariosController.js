const connection = require('../config/db');

// Obtener todos los usuarios
const getUsuarios = (req, res) => {
  connection.query('SELECT * FROM Usuarios', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Crear un usuario
const createUsuario = (req, res) => {
  const { IdTipoDoc, Nombre, Apellido, Correo, Celular, Direccion } = req.body;

  const sql = `
    INSERT INTO Usuarios (IdTipoDoc, Nombre, Apellido, Correo, Celular, Direccion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(sql, [IdTipoDoc, Nombre, Apellido, Correo, Celular, Direccion], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: '✅ Usuario creado', id: result.insertId });
  });
};

// Actualizar un usuario
const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { IdTipoDoc, Nombre, Apellido, Correo, Celular, Direccion } = req.body;

  const sql = `
    UPDATE Usuarios
    SET IdTipoDoc = ?, Nombre = ?, Apellido = ?, Correo = ?, Celular = ?, Direccion = ?
    WHERE IdUsuario = ?
  `;

  connection.query(sql, [IdTipoDoc, Nombre, Apellido, Correo, Celular, Direccion, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: '✏️ Usuario actualizado' });
  });
};

// Eliminar un usuario
const deleteUsuario = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM Usuarios WHERE IdUsuario = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: '🗑️ Usuario eliminado' });
  });
};

module.exports = {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};