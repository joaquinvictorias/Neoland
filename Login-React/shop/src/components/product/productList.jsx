import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "./productCard";
import products from "./products.json";
import ProductsImages from "./productsimages.json";

// Estructura del producto y la imagen del producto
const productsWithImages = products.map((product) => {
  const image = ProductsImages.find(({ id }) => id === product.id);
  if (image) {
    product.images = image.images;
  }
  return product;
});

const ProductsList = () => {
  return (
    <Container maxWidth="lg">
      {/* Contenedor de la lista de productos */}
      <Grid container spacing={2} justifyContent="flex-start">
        {productsWithImages.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {/* Tarjeta del producto */}
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
