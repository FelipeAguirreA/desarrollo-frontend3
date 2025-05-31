// src/utils/formValidation.js

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isNotEmpty = (value) => {
  return value.trim() !== '';
};

export const validateForm = ({ nombre, email, mensaje, producto }) => {
  const errors = {};

  if (!isNotEmpty(nombre)) {
    errors.nombre = "El nombre es obligatorio.";
  }

  if (!isValidEmail(email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  if (!isNotEmpty(mensaje)) {
    errors.mensaje = "El mensaje no puede estar vacío.";
  }

  if (!isNotEmpty(producto)) {
    errors.producto = "Debes seleccionar una opción.";
  }

  return errors;
};
