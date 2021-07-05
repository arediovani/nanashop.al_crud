import './App.css';
import React, { useState, useEffect } from 'react';
import data from './data.json'
import { Row, Col } from 'react-bootstrap'
import CardBody from './CardBody'
import { Button } from 'react-bootstrap'

function App() {
  const [clothes, setClothes] = useState(data)
  function deleteClothe (e){
    console.log('delete item id ' + e)
  }
  function AddNewClothe() {
    let emptyObj = {
      "id": clothes.length + 1,
      "name": "",
      "description": "",
      "price": 0,
      "color": "",
      "category": "",
      "pictures": [
      ],
      "size": [
      "mollit",
      "mollit"
      ],
      "tags": [
      "mollit",
      "mollit"
      ]
    }
    setClothes(clothes=>[...clothes,emptyObj])
  }
  useEffect(() => {
    console.log("USE EFFECT")

  });
  return (
    <div className="App">
      <div className="container">
        <Row>
          {
            clothes.map((e, i) => {
              return (
                <Col key={i} sm={12} lg={4} style={{ padding: '4rem' }}>
                  <CardBody props={e} deleteClothe={deleteClothe} />
                </Col>
              )
            })
          }
        </Row>
        <Col lg={4} style={{ widht: 'auto' }}>
          <Button variant="success" onClick={AddNewClothe}>Add New</Button>
        </Col>
      </div>
    </div>
  );
}

export default App;
