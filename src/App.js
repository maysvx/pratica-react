import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Menu from './Components/Menu';
import Principalmg from './Components/Principalmg';

function App() {
  return (
    <div>

      <Menu/>

      <Container>
        <h1>Ola mundo</h1>

        <Principalmg></Principalmg>
      </Container>
      
    </div>
  );
}

export default App;
