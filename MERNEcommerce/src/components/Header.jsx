import { Navbar , Nav , Container } from 'react-bootstrap'
import { FaShoppingCart , FaUser } from 'react-icons/fa'
import Logo from "../assets/logo.png"
function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={Logo} alt="will_get_my_own_later" />
                    Joe's Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        <Nav.Link href='/login'>
                            <FaUser /> login
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header