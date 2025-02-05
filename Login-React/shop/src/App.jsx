import "./App.css";
import Pages from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <AuthProvider>
          <CartContextProvider>
            <Pages />
          </CartContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
