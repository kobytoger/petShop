import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import OverLayCat from "../components/OverLayCat";
import Popover from "react-bootstrap/Popover";

const CategoryScreen = () => {
  const { pageNumber, keyword, categoryName } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Hello!</Popover.Header>
      <Popover.Body>
        Welcome to our <strong>amazing</strong> shop. It's a pleasure to see
        you.
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverLayCat
        popover={popover}
        srcUrl={
          "https://www.icegif.com/wp-content/uploads/2023/06/icegif-387.gif"
        }
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1 className="text-center">Cats Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {product.category === categoryName && (
                  <Product product={product} />
                )}
              </Col>
            ))}
          </Row>

          {keyword && (
            <Link to="/" className="btn btn-light mb-4">
              Go Back
            </Link>
          )}

          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default CategoryScreen;
