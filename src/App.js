import React, { useState, useEffect } from 'react';
import data from './data.json'
import { Row, Col } from 'react-bootstrap'
import CardBody from './CardBody'
import { Button } from 'react-bootstrap'
import ModalUpdate from './ModalUpdate';
import categorydata from './category.json'

function App() {
  const [clothes, setClothes] = useState(data)
  const [modalShow, setModalShow] = useState(false);
  const [selectedClothe, setselectedClothe] = useState({})
  const [categories] = useState(categorydata)
  function updatefunc(updatedClothe) {
    console.log(updatedClothe)
    let newClohte = clothes.map((el) => {
      if (clothes.id === el.id) {
        return updatedClothe
      } else {
        return el
      }
    })
    setClothes(newClohte)

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
                  <CardBody data={e} deletefunc={deleteClothe} setModal={setModal} />
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
        clothe={selectedClothe}
        categories={categories}
        updateCloothe={updatefunc}
      />
    </div>
  );
}

export default App;
