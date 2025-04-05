import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css';
function Navv(props) {
  return (
    <Navbar className='navbar' variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className='nav-element'>Home</Nav.Link>
          <Nav.Link href="/about" className='nav-element'>About</Nav.Link>
          <Nav.Link href="/contact" className='nav-element'>Contact</Nav.Link>
          <Nav.Link href="/login" className='nav-element'><button className='login-button'>Login</button></Nav.Link>
          <Nav.Link href="/registration" className='nav-element'><button className='register-button'>Register</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navv;



