import { List, Typography, Box } from "@mui/material";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";

// Componente funcional Cart
// eslint-disable-next-line react/prop-types
const Cart = () => {
  // Utilizamos el contexto del carrito
  const { user } = useAuth();
  const cartCtx = useContext(CartContext);

  function calculateTotalAmount() {
    if (cartCtx.items.length) {
      const allAmounts = cartCtx.items.map((item) => item.price * item.quantity);
      return allAmounts.reduce((acc, val) => acc + val, 0);
    }
    return 0;
  }

  function handleCompra() {
    if (!cartCtx.items.length) {
      alert("Agrega productos al carrito");
    }
  }

  // Función para manejar la eliminación de un ítem del carrito
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {cartCtx.items.length ? (
          cartCtx.items.map((item) => (
            <li key={item.id}>
              <p>{item.name} x {item.quantity} - {item.price * item.quantity}$</p>
              <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
              <button onClick={() => cartCtx.addItem(item)}>+</button>
            </li>
          ))
        ) : (
          <h3>El carrito está vacío</h3>
        )}
      </List>
      <p>Precio Total: {calculateTotalAmount()}$</p>
      {calculateTotalAmount() > 0 && <button onClick={() => cartCtx.clearCart()}>Vaciar</button>}
      {user ? (
        <button onClick={handleCompra}>Comprar</button>
      ) : (
        <h3>Inicia sesión para continuar</h3>
      )}
    </Box>
  );
};

export default Cart;
