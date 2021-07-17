import React, { useState, useEffect } from 'react';
import clothesdata from './data.json'
import { Row, Col } from 'react-bootstrap'
import CardBody from './CardBody'
import { Button } from 'react-bootstrap'
import ModalUpdate from './ModalUpdate';
import categorydata from './category.json'

function App() {
  const [clothes, setClothes] = useState(clothesdata)
  const [modalShow, setModalShow] = useState(false);
  const [selectedClothe, setselectedClothe] = useState({})
  const [categories] = useState(categorydata)
  useEffect(() => {
  }, [clothes])

  const updatefunc = (event, bol, newClothe) => {
    if (newClothe) {
      let newClohte = clothes.map((el) => {
        console.log(newClothe)
        if (newClothe.id === el.id) {
          return newClothe
        } else {
          return el
        }
      })
      setClothes(newClohte)
    }
    setModalShow(bol)
  }
  function setModal(bol, clothe) {

    setselectedClothe(clothe)
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
      "name": "New Clothe",
      "description": "",
      "price": 100,
      "color": "",
      "category": "",
      "pictures": [
      ],
      "size": [
      ],
      "tags": [
      ]
    }
    setClothes(clothes => [...clothes, emptyObj])
  }
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(clothes));
  return (
    <div className="App">
      <div className="container">
        <Row>
          {
            clothes.map((e, i) => {
              return (
                <Col key={i} sm={12} lg={4} style={{ padding: '4rem' }}>
                  <CardBody data={e} deletefunc={deleteClothe} setModal={setModal} />
                </Col>
              )
            })
          }
        </Row>
        <Col lg={4} style={{ widh: 'auto' }}>
          <Button variant="success" onClick={AddNewClothe}>Add New</Button>
          <Button variant="info"><a href={`data:${data}`} download="data.json">download JSON</a></Button>
        </Col>
      </div>

      <ModalUpdate
        show={modalShow}
        onHide={updatefunc}
        clothe={selectedClothe}
        categories={categories}
      />
    </div>
  );
}

export default App;
