import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";


function Home() {
  // calling Hooks
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);
  const dispatch = useDispatch()

  return (
    <Row className="ms-5" style={{ marginTop: "100px" }}>
      {data?.length > 0 ? (
        data?.map((product, index) => (
          <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card className="shadow rounded-top" style={{ width: "18rem",height:"29rem" }}>
              <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <p>{product?.description.slice(0,55)}...</p>
                  <h5>$ {product?.price}</h5>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button onClick={()=>dispatch(addToWishlist(product))} className="btn ">
                    <i className="fa-regular fa-heart text-danger fs-5"></i>
                  </Button>
                  <Button onClick={()=>dispatch(addToCart(product))} className="btn ">
                    <i className="fa-solid fa-cart-plus text-success fs-5"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-danger fw-bolder fs-4">Nothing to display</p>
      )}
    </Row>
  );
}

export default Home;
