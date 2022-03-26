import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, ListGroup } from 'react-bootstrap';
import Menu from './Components/Menu';
import Principalmg from './Components/Principalmg';
import Sociedades from './Components/Sociedades';

function App() {
  return (
    <div className='bg-dark'>
      <Menu/>

      <Container className='bg-dark'>
        <br/>
        <Principalmg/>
        <br/> <br/>
        <Sociedades/>
        <br></br>

        <h1>ola </h1>
        
      </Container>      
    </div>
  );
}

export default App;
