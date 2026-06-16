import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

function Productcard({ product, onAddToCart, cartItems = [], onIncrease, onDecrease }) {
  const navigate = useNavigate();
  const inCart = cartItems.find((p) => p.id === product.id);
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/Product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Category : {product.category}</Card.Text>
          <Card.Text>Price : ${product.price}</Card.Text>
        </Card.Body>
      </Link>
      <Card.Body className="pt-0">
        {!inCart && (
          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              onAddToCart && onAddToCart(product);
              navigate("/MyCart");
            }}
          >
            Add to Cart
          </Button>
        )}
        {inCart && (
          <div className="d-flex align-items-center justify-content-between">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => {
                onDecrease && onDecrease(product.id);
                navigate("/MyCart");
              }}
            >
              -
            </Button>
            <span>Qty: {inCart.qty}</span>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => {
                onIncrease && onIncrease(product.id);
                navigate("/MyCart");
              }}
            >
              +
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Productcard;
