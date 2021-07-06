import React, { useState, useEffect } from 'react';
import data from './data.json'
import { Row, Col } from 'react-bootstrap'
import CardBody from './CardBody'
import { Button } from 'react-bootstrap'
import ModalUpdate from './ModalUpdate';

function App() {
  const [clothes, setClothes] = useState(data)
  const [modalShow, setModalShow] = useState(false);
  function setModal(bol, clothe){
    ModalUpdate(clothe)
    setModalShow(true)
  }
  function deleteClothe(event) {
    let newClothe = clothes.filter((el) => {
      if (!(el.id === event)) {
        return true
      }
    })
    setClothes(newClothe)
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
    setClothes(clothes => [...clothes, emptyObj])
  }
  useEffect(() => {

  });
  return (
    <div className="App">
      <div className="container">
        <Row>
          {
            clothes.map((e, i) => {
              return (
                <Col key={i} sm={12} lg={4} style={{ padding: '4rem' }}>
                  <CardBody data={e} deletefunc={deleteClothe} setModal={setModal}/>
                </Col>
              )
            })
          }
        </Row>
        <Col lg={4} style={{ widh: 'auto' }}>
          <Button variant="success" onClick={AddNewClothe}>Add New</Button>
        </Col>
      </div>

      <ModalUpdate
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
