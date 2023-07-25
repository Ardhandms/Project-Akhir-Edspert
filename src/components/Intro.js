import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-item-center'>
            <Row>
              <Col>
                <div className='title'>JELAJAHI DUNIA MELALUI</div>
                <div className='title'>TAYANGAN FILM EPIK</div>
                <div className='introButton text-center'>
                    <Button variant='dark mt-3' href='#trending'>TRENDING MOVIE</Button>
                    <Button variant='dark mt-3' href='#new' style={{marginLeft: '10px'}}>NEW MOVIE</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro