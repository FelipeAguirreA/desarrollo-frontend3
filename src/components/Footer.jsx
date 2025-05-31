// src/components/Footer.jsx
import { Typography, Link } from '@mui/material';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} Tejelanas Vivi. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" className="footer-text">
        Síguenos en{' '}
        <Link href="https://es-la.facebook.com/MezcliMam/" target="_blank" rel="noopener" className="footer-link">
          Facebook
        </Link>{' '}
        |{' '}
        <Link href="https://www.instagram.com/teje_lanas.vivi/" target="_blank" rel="noopener" className="footer-link">
          Instagram
        </Link>{' '}
        |{' '}
        <Link href="https://twitter.com" target="_blank" rel="noopener" className="footer-link">
          Twitter
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
