import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" variant="dark" className="mt-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              style={{ border: "black solid" }}
              width="30%"
              src={product.image}
              alt={product.name}
              fluid
              className="mb-5 rounded mx-auto d-block"
            />
            <Carousel.Caption>
              <p>{product.name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
