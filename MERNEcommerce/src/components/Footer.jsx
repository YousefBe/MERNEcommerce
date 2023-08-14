import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    const curY = new Date().getFullYear();

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>Joe's Shop &copy; {curY}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer