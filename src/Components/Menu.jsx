import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu() {
    return (
      <div>
            <Navbar variant="dark" className='shadow p-3 mb-5 bg-dark rounded'>
                <Container>
                <Navbar.Brand>
                  <img src="https://th.bing.com/th/id/R.a76d8b229d81289df5da4acbca43f4ec?rik=c9pRG3A4IMXp6w&pid=ImgRaw&r=0" width="100" height="50"></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">INICIO</Nav.Link>
                    <Nav.Link href="#features">PESQUISA</Nav.Link>
                    <Nav.Link href="#pricing">MINHA LISTA</Nav.Link>
                    <Nav.Link href="#pricing">ORIGINAIS</Nav.Link>
                    <Nav.Link href="#pricing">FILMES</Nav.Link>
                    <Nav.Link href="#pricing">SERIES</Nav.Link>
                </Nav>
                <Nav>
                      <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                          Usuario &nbsp; &nbsp; &nbsp;
                          <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' width="45" height="45"></img>
                        </Navbar.Text>
                      </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
            <br/>
      </div>
    );
  }
  
  export default Menu;