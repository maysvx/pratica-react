import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row } from 'react-bootstrap';

function Sociedades(){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="border rounded 5px" >
                            <Card.Img variant="top" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Disney-Logo-Reedited.jpg" /> 
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="border rounded 5px" >
                            <Card.Img variant="top" src="https://th.bing.com/th/id/R.d49b12796617d0cd7080cb45877feb4f?rik=whL8oZCEkrxw0Q&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2019%2f12%2fStar-Wars-emblema.jpg&ehk=QpVxziiBJcHHI5euKAAqpp5IrxCFO%2ffeLIFfiT1aBcY%3d&risl=&pid=ImgRaw&r=0"/> 
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="border rounded 5px" >
                            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.cZeuytvD0aSre4ElWVm5kQHaEK?pid=ImgDet&rs=1" /> 
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="border rounded 5px" >
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/a6/77/d1/a677d1e8794db3ac9982972744414f0c.jpg" /> 
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
  
  export default Sociedades;