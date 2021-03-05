import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const box = new Array(9);
box.fill(false);

const App = () => {
  const [number, setNumber] = useState('');
  
  const boxColor = (e) => {
    e.preventDefault();
    let num = parseInt(number) 
    num = num - 1
    if(num >= 0 && num < 9){
      box[num] = true
    }
    setNumber('')
  };

  useEffect(() => {
    box.fill(false)
  },[number])
  return (
    <Container>
      <Row>
        <Col className="center">
          <form onSubmit={boxColor}>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="enter in between 1 to 9.."/>
            <input type="submit"/>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="third-grid">
            {box.map((l, index) => {
              return (
                <div className={l ? 'box-line' : 'box-line-change'} key={index}>
                  <p>{l}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
