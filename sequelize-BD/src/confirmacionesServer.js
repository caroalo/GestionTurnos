import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import "./home.css";

/*Muestra la lista de confirmaciones de reservas en la página del Administrador*/
const Confirmaciones = () => {
  const [confirmaciones, setConfirmaciones] = useState([]);

  useEffect(() => {
    const fetchConfirmaciones = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/confirmaciones');
        setConfirmaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las confirmaciones:', error);
      }
    };

    fetchConfirmaciones();
  }, []);

  return (
    
    <div className="text-box">
      <Navbar />

      <h2>Reservas de Turnos</h2>
      <div className="confirmation-list">
        {confirmaciones.map((confirmacion) => (
          <div key={confirmacion.id} className="confirmation-item">
            <p><strong>Código de Reserva:</strong> {confirmacion.codigo}</p>
            <p><strong>Fecha:</strong> {new Date(confirmacion.fecha).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })}</p>
            <p><strong>Hora:</strong> {confirmacion.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confirmaciones;
