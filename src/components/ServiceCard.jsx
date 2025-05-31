// src/components/ServiceCard.jsx

import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../style/ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  const handleContact = () => {
    // Limpia el hash antes de establecerlo para forzar el evento
    if (window.location.hash === '#contacto?producto=Producto') {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = '#contacto?producto=Producto';
        const contactoSection = document.getElementById('contacto');
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.location.hash = '#contacto?producto=Producto';
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Card className="service-card">
      <CardMedia component="img" image={image} alt={title} className="service-card-image" />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Button onClick={handleContact} className="contact-btn">Contáctanos</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
