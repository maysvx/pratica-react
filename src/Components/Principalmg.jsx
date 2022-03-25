import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Principalmg() {
    return (
      <div>
            <Card className="bg-dark text-white">
                <Card.Img src="https://cdn.pixabay.com/photo/2012/03/04/00/50/board-22098_960_720.jpg" alt="Card image" width="250" height="500"/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
      </div>
    );
  }
  
  export default Principalmg;