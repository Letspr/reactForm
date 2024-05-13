import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  ButtonGroup,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useState, useRef } from "react";
import "./FormularioBootstrap.css";

function FormularioBootstrap() {
  const [file, setFile] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleReset = (e) => {
    setFile(null);
    setCounter(counter + 1);
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
                key={counter}
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
