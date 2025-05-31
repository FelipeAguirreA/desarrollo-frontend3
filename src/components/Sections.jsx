import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardContent, CardMedia, Typography,
  Container, Box, CircularProgress, Dialog, DialogContent, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { addColorShadowEffect } from '../utils/SectionsImgEffect';
import '../style/Sections.css';

const Sections = () => {
  const [data, setData] = useState({
    quienesSomos: '',
    productos: [],
    servicios: [],
    faq: []
  });

  const [loadingImages, setLoadingImages] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const headers = {
        Authorization: 'Bearer ipss.get',
      };

      try {
        const [aboutRes, productsRes, faqRes] = await Promise.all([
          fetch(corsProxy + 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', { headers }),
          fetch(corsProxy + 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', { headers }),
          fetch(corsProxy + 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/', { headers }),
        ]);

        const aboutData = await aboutRes.json();
        const productsData = await productsRes.json();
        const faqData = await faqRes.json();

        const allImgs = [
          ...productsData.data.productos.map(p => p.imgs[0]),
          ...productsData.data.servicios.map(s => s.imgs[0])
        ];

        preloadImages(allImgs).then(() => setLoadingImages(false));

        setData({
          quienesSomos: aboutData.data.replace(/^"|"$/g, ''),
          productos: productsData.data.productos.map(p => ({
            nombre: p.nombre,
            descripcion: p.descripcion,
            precio: p.precio,
            tallas: p.tallas,
            colores: p.colores,
            img: p.imgs[0]
          })),
          servicios: productsData.data.servicios.map(s => ({
            nombre: s.nombre,
            ubicacion: s.ubicacion,
            fecha: s.fecha,
            cupos: s.cupos,
            img: s.imgs[0]
          })),
          faq: faqData.data.map(f => ({
            pregunta: f.titulo,
            respuesta: f.respuesta
          })),
        });
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setLoadingImages(false);
      }
    };

    fetchData();
  }, []);

  const preloadImages = (srcs) => {
    return Promise.all(
      srcs.map(src => new Promise(resolve => {
        const img = new Image();
        img.onload = img.onerror = resolve;
        img.src = src;
      }))
    );
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {/* Modal para imagen ampliada */}
      <Dialog
        open={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        maxWidth="md"
        PaperProps={{ style: { background: 'transparent', boxShadow: 'none' } }}
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton
            aria-label="cerrar"
            onClick={() => setSelectedImg(null)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#fff',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImg}
            alt="Ampliada"
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'block',
              margin: 'auto',
              borderRadius: 8,
              boxShadow: '0 4px 32px rgba(0,0,0,0.4)'
            }}
          />
        </DialogContent>
      </Dialog>

      <Box mb={6}>
        <Typography variant="h4" gutterBottom>Quiénes Somos</Typography>
        <Typography variant="body1">{data.quienesSomos}</Typography>
      </Box>

      {loadingImages ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          <Box id="productos" className="section" mb={6}>
            <Typography variant="h4" gutterBottom>Productos</Typography>
            <Grid container spacing={2}>
              {data.productos.map((p, i) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={i}>
                  <Card className="card-hover" sx={{ maxWidth: 320, margin: "0 auto" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={p.img}
                      alt={p.nombre}
                      sx={{ objectFit: "contain", objectPosition: "center", background: "#f5f5f5", cursor: "pointer" }}
                      onClick={() => setSelectedImg(p.img)}
                      onMouseEnter={e => addColorShadowEffect(e.currentTarget)}
                    />
                    <CardContent>
                      <Typography variant="h6">{p.nombre}</Typography>
                      <Typography variant="body2" color="text.secondary">{p.descripcion}</Typography>
                      {p.tallas.length > 0 && (
                        <Typography variant="body2"><strong>Tallas:</strong> {p.tallas.join(', ')}</Typography>
                      )}
                      {p.colores.length > 0 && (
                        <Typography variant="body2"><strong>Colores:</strong> {p.colores.join(', ')}</Typography>
                      )}
                      <Typography variant="subtitle1" sx={{ mt: 1 }}><strong>Precio:</strong> ${p.precio}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mb={6}>
            <Typography variant="h4" gutterBottom>Servicios / Talleres</Typography>
            <Grid container spacing={2}>
              {data.servicios.map((s, i) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={i}>
                  <Card className="card-hover" sx={{ maxWidth: 320, margin: "0 auto" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={s.img}
                      alt={s.nombre}
                      sx={{ objectFit: "contain", objectPosition: "center", background: "#f5f5f5", cursor: "pointer" }}
                      onClick={() => setSelectedImg(s.img)}
                      onMouseEnter={e => addColorShadowEffect(e.currentTarget)}
                    />
                    <CardContent>
                      <Typography variant="h6">{s.nombre}</Typography>
                      <Typography variant="body2"><strong>Ubicación:</strong> {s.ubicacion}</Typography>
                      <Typography variant="body2"><strong>Fecha:</strong> {s.fecha}</Typography>
                      <Typography variant="body2"><strong>Cupos:</strong> {s.cupos}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}

      <Box id="faq" className="section">
        <Typography variant="h4" gutterBottom>Preguntas Frecuentes</Typography>
        {data.faq.map((item, i) => (
          <Box key={i} mb={2}>
            <Typography variant="subtitle1"><strong>{item.pregunta}</strong></Typography>
            <Typography variant="body2">{item.respuesta}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Sections;
