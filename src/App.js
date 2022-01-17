/* esLint-disable*/
import logo from './logo.svg';
import { Navbar,Nav,Container,NavDropdown, Carousel, Button} from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';
import $ from 'jquery';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Cart from './Cart.js';
function App() {

  let [shoes, setshoes] = useState(Data);
  let [str_loading, setstr_loading] = useState(false)
  let [inventories, setinventories] = useState([10,11,12]);

  useEffect(()=>{
    $('body').hide();
    $('body').fadeIn(500);
  },[])
  {console.log("ss")}
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">Kinopio shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav href="#deets">More deets</Nav>
              <Nav eventKey={2} href="#memes">
                Dank memes
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
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
            <button className='btn btn-primary' onClick={()=>{ 
              setstr_loading(true);
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                setstr_loading(false)
                setshoes([...shoes, ...result.data])
                console.log('성공')
               })
              .catch(()=>{ 
                setstr_loading(false)
                console.log('실패')
               })
             }}>더 보기</button>
             {
                str_loading === true
                ? <Loading></Loading>
                : null
              }
          </div>
        </Route>
        <Route path="/detail/:id">
          {/* <Detail shoes={shoes} inventories={inventories} setinventories={setinventories}></Detail> */}
          <div></div>
        </Route>
        {/* <Route path="/cart">
          <Cart></Cart>
        </Route> */}

        <Route path="/:id">
          <div>아무거나 적었을때 이거 나옴asdsad</div>
        </Route>
      </Switch>

      
      
    </div>
  );
}
function Card(props){
  return(
    <div className='col-md-4' ><Link to={"/detail/"+props.i}>
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>
      <h3>{ props.shoes.title }</h3>
      <p>{ props.shoes.content } & { props.shoes.price } price</p>
      </Link></div>
  )
}


export default App;
