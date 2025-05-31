import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../style/ImageCarousel.css";

const ImageCarousel = () => {
  const imageLinks = [
    "https://images.unsplash.com/photo-1615310748170-29d7088865ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1597954222037-77adcb50f9a4?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613662201394-5c2e936881e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588676000557-dc67e2d3bd19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {imageLinks.map((link, index) => (
          <Paper key={index} className="carousel-paper">
            <img src={link} alt={`slide-${index}`} className="carousel-image" />
            {index === 0 && (
              <div className="carousel-welcome-text">
                Bienvenidos a Tejelanas Vivi
              </div>
            )}
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
