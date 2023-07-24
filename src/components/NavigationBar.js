import {Navbar,Container,Nav} from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant='dark'>
            <Container>
                <Navbar.Brand href='/'>DHAN CINEMA</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#trending'>Trending</Nav.Link>
                    <Nav.Link href='#new'>New</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar