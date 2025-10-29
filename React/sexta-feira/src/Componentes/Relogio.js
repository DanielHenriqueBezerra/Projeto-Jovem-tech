import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-50 bg-light border-round-05"
      style={{
        borderRadius: '50px',
        border: '50px solid #0d11e1ff'

      }}>
      <div className="card text-center shadow-lg"
       >
        <div className="card-body"
          style={{
            transition: '0.3s',

            
            hover: { boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
          }}>
        <h5 className="card-title text-primary mb-3">🕒 Relógio</h5>
        <h1 className="display-5 fw-bold">
          {hora.toLocaleTimeString("pt-BR")}
        </h1>
        <p className="text-muted mb-0">
          {hora.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
    </div >
  );
}

export default Relogio;
