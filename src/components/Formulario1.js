import React, { Fragment, useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre </label>
        <input
          Type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
