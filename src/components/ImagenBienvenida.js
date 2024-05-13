import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./ImagenBienvenida.css";

function ImagenBienvenida() {
  return (
    <Link to="/login">
      <Image src="/imagenBienvenida.jpg" fluid className="full-screen-image" />;
    </Link>
  );
}

export default ImagenBienvenida;
