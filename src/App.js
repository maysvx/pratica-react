import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, ListGroup } from 'react-bootstrap';
import Menu from './Components/Menu';
import Principalmg from './Components/Principalmg';

function App() {
  return (
    <div className='bg-dark'>
      <Menu/>

      <Container className='bg-dark'>
        <br/>
        <Principalmg/>
        
        </Container>      
    </div>
  );
}

export default App;
