import "bootstrap/dist/css/bootstrap.min.css";
import React, {useRef} from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setFile } from "../actions/formularioActions";
import "./FormularioBootstrap.css";

function FormularioBootstrap() {
  const dispatch = useDispatch();
  const file = useSelector((state) => state.formulario.file);
  const fileInput = useRef(null); 

  const handleChange = (e) => {
    dispatch(setFile(e.target.files[0]));
  };

  const handleReset = (e) => {
    dispatch(resetForm());
    if (fileInput.current) {
      fileInput.current.value = null; // Limpiar el input del archivo
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que la página se recargue
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://miapi.com/endpoint", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      alert("El formulario se ha enviado");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={10} md={8} lg={6} className="cuadro-formulario">
          <Card.Title className="custom-title">
            SELECCIÓN DE ARCHIVOS
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                className="transparent-input"
                onChange={handleChange}
                ref = {fileInput}
              />
            </Form.Group>
            {/*  <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control
                type="file"
                className="transparent-input"
                onChange={handleChange}
              />
            </Form.Group> */}
            <div className="d-flex justify-content-end">
              <ButtonGroup>
                <Button
                  className="w-50 custom-button border"
                  onClick={handleReset}
                >
                  Limpiar
                </Button>
                <Button type="submit" className="w-50 custom-button border">
                  Lanzar
                </Button>
              </ButtonGroup>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioBootstrap;
