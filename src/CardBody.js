import React from 'react'
import {Card, Button, CloseButton} from 'react-bootstrap'

const CardBody = (data, {deleteClothe}) =>{
    let clothe = data.props
    return(
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                  <CloseButton onClick={deleteClothe}/>
                <Card.Title>{clothe.name}</Card.Title>
                <Card.Text>
                    Description: {clothe.description}
                </Card.Text>
                <Card.Text>
                    Price: {clothe.price}
                </Card.Text>
                <Card.Text>
                    Color: {clothe.color}
                </Card.Text>
                <Card.Text>
                    Category: {clothe.category}
                </Card.Text>
                <Card.Text>
                    Tags: {clothe.category}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    )
}
export default CardBody