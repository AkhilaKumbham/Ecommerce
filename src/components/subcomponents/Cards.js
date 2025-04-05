import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cards = () => {
  // Define products array before return statement
  const products = [
    {
      id: 1,
      title: "Product 1",
      cost: "Price: $10",
      image: "https://cdn.pixabay.com/photo/2015/09/26/09/08/hipster-958805_1280.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      cost: "Price: $1500",
      image: "https://cdn.pixabay.com/photo/2018/07/11/11/14/ecommerce-3530785_1280.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      cost: "Price: $20",
      image: "https://cdn.pixabay.com/photo/2018/12/23/18/03/watch-3891591_1280.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      cost: "Price: $25",
      image: "https://cdn.pixabay.com/photo/2018/03/21/21/13/cart-3248225_1280.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      cost: "Price: $370",
      image: "https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      cost: "Price: $35",
      image: "https://cdn.pixabay.com/photo/2018/02/05/17/25/bitcoin-3132717_1280.jpg",
    },
    {
      id: 7,
      title: "Product 7",
      cost: "Price: $400",
      image: "https://cdn.pixabay.com/photo/2021/08/03/06/47/clock-6518632_1280.jpg",
    },
    {
      id: 8,
      title: "Product 8",
      cost: "Price: $50",
      image: "https://cdn.pixabay.com/photo/2023/11/10/10/19/cheese-8379082_1280.jpg",
    },
    {
      id: 9,
      title: "Product 9",
      cost: "Price: $900",
      image: "https://cdn.pixabay.com/photo/2019/02/16/14/19/shopping-4000414_1280.jpg",
    },
  ];

  return (
      <Container className="mt-4">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.cost}</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

 );
};

export default Cards;
