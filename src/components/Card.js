import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";

const CardProduct = ({ title, price, category, image, id }) => {
  return (
    <div className="mb-2">
      <Card className="h-100">
        <CardImg
          className="img-fluid w-50 p-3"
          top
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            $ {price}
          </CardSubtitle>
          <CardText>{category}</CardText>
          <Link to={`/product/${id}`} className="btn btn-primary badge pill">
            Detail
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProduct;
