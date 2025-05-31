// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Modal, Typography, MenuItem } from '@mui/material';
import { validateForm } from '../utils/FormValidation';
import '../style/ContactForm.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ContactForm = () => {
  const getInitialProduct = () => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    return params.get('producto') || '';
  };

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    producto: '', // Siempre vacío al cargar
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  // Escucha cambios en el hash para actualizar el motivo de contacto
  useEffect(() => {
    const onHashChange = () => {
      const producto = getInitialProduct();
      setFormData(prev => ({
        ...prev,
        producto,
      }));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
      producto: '',
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      handleOpen();
      // Aquí va la lógica para enviar el formulario si hay backend a mysql
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Box id="contacto" component="form" onSubmit={handleSubmit} className="contact-form" noValidate>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Contáctanos
        </Typography>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          error={!!errors.nombre}
          helperText={errors.nombre}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          select
          label="Motivo de contacto"
          name="producto"
          value={formData.producto}
          onChange={handleChange}
          required
          error={!!errors.producto}
          helperText={errors.producto}
        >
          <MenuItem value="">Selecciona una opción</MenuItem>
          <MenuItem value="Producto">Producto</MenuItem>
          <MenuItem value="Servicio">Servicio</MenuItem>
          <MenuItem value="Consulta">Consulta</MenuItem>
        </TextField>
        <TextField
          label="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          multiline
          rows={4}
          required
          error={!!errors.mensaje}
          helperText={errors.mensaje}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¡Formulario enviado con éxito!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Gracias por contactarnos. Te responderemos pronto.
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ mt: 3 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ContactForm;
