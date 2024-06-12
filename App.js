import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*function App() {
  return (
    
    <>
    <div className="App">
      <header>
        My first App
      </header>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-secondary"
                  data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="This top tooltip is themed via CSS variables.">
                  Custom tooltip
                </button>
                <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
          <div className="col">
            kkk
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
      </div>
    </div>
 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
 ></script>
  </>    
  );

}*/

/*function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
*/
//export default BasicExample;

//export default App;


function App() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>

<Container>
     
      <Row>
        <Col>1 of 3 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col>2 of 3
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col>3 of 3
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

    
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

export default App;
