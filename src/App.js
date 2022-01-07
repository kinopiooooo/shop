/* esLint-disable*/
import logo from './logo.svg';
import { Navbar,Nav,Container,NavDropdown, Carousel, Button} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';
import data from './data.js';

function App() {

  let [shoes, setshoes] = useState(Data);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Kinopio shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='jumbotron'>
        <h2>Hollo, Kinopio!</h2>
        <p>Kinopio Shop 새로운 아무도 상상하지 못한 제품들이 여러운을 찾아갑니다!!</p>
        <p><Button variant="primary">Learn more</Button>{' '}</p>
      </div>

      
      <div className='container'>
        <div className='row'>
        {
          shoes.map((item, i)=>{
            return(
              <Card shoes={shoes[i]} i={i} key={i}/>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}
function Card(props){
  return(
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>
      <h3>{ props.shoes.title }</h3>
      <p>{ props.shoes.content } & { props.shoes.price } price</p>
    </div>
  )
}

export default App;
