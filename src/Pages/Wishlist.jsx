import React from 'react'
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from '../redux/Slices/cartSlice';

function Wishlist() {
  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()


  const handleWishlistCart = (product) =>{
      dispatch (addToCart(product))
      dispatch (removeFromWishlist(product.id))
  }

  return (
    <div style={{marginTop:'100px'}}>
      <Row>
        {
          WishlistArray.length>0?WishlistArray.map((product,index)=>(
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
                  <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn ">
                    <i className="fa-solid fa-trash text-danger fa-2x"></i>
                  </Button>
                  <Button onClick={()=>{handleWishlistCart(product)}} className="btn ">
                    <i className="fa-solid fa-cart-plus text-success fa-2x"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img src="" alt="" />
            <h3 className='fw-bolder text-primary'>Your Wishlist is Empty!!</h3>
            <Link className='text-decoration-none btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist