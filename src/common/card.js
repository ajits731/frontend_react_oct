import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import {useContext} from 'react';

function CardComponent(props) {
  
    // console.log('props Card:', props);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {props.product.price}</ListGroup.Item>
        <ListGroup.Item>Rating: {props.product.rating.rate}</ListGroup.Item>
      </ListGroup>
      <Card.Link target="_blank" href={`/product/${props.product.id}`}>See More</Card.Link>
    </Card>
  );
}

export default CardComponent;