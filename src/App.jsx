import { useState } from "react";
import { services } from "./mockdata/services";

function App() {
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  // calcular total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const filteredServices = services.filter((service) =>
  service.title.toLowerCase().includes(search.toLowerCase())
);

  return (
   <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "20px" }}>
  Servicios de Asistencia Virtual 💻
</h1>

<input
  type="text"
  placeholder="Buscar servicio..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <h2>Servicios disponibles</h2>
      {filteredServices.map((service) => (
        <div
  key={service.id}
  style={{
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    backgroundColor: "white"
  }}
>


          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p><strong>${service.price}</strong></p>

          <button
  onClick={() => addToCart(service)}
  style={{
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px"
  }}
>
            Contratar
          </button>
        </div>
      ))}

      <hr />

      <h2>Carrito 🛒</h2>

      <div
  style={{
    backgroundColor: "#fafafa",
    padding: "15px",
    borderRadius: "10px"
  }}
></div>

      {cart.length === 0 ? (
        <p>No has agregado servicios</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>
              {item.title} - ${item.price}
            </p>
          ))}

          <h3>Total: ${total}</h3>

          <button>Finalizar solicitud</button>
        </>
      )}
    </div>
  );
}

export default App;