import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/pagina1">Página</Link>
            <Link className="nav-link" to="/contador">Contador</Link>

            <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes/populares">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamentos">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/em-cartaz">Cartaz</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu