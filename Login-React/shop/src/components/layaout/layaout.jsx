// Layout.tsx
import Header from "./header"; // Asegúrate de importar tu componente Header

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "64px" }}>{children}</main>
      {/* Aquí podrías incluir también un Footer si lo necesitas */}
    </div>
  );
};
