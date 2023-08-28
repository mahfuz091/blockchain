import { Container, Navbar, Nav } from 'react-bootstrap'
import Logo from './logo.svg'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header-area'>
      <Navbar expand='lg'>
        <Container>
          <Link to='/' className='navbar-brand'>
            <img src={Logo} alt='Site Logo' />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Link to='/'>Home</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Explore</Link>
            </Nav>
          </Navbar.Collapse>

          <Link to='/' className='primary-btn'>
            Get Started
          </Link>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
