import React from 'react'
import { Card, Button, CloseButton, Image } from 'react-bootstrap'

const CardBody = (props) => {
    let clothe = props.data
    return (
        <Card style={{ width: 'auto' }}>
            <Card.Body>
                <CloseButton onClick={() => props.deletefunc(clothe.id)} />
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
                    Tags: {clothe.tags}
                </Card.Text>
                <Card.Text>
                    Pictures
                    {
                        clothe.pictures.map((el,index)=>{
                        return <Image src={el} alt={index}></Image>
                        })
                    }
                </Card.Text>
                <Button variant="primary" onClick={() => props.setModal(true, clothe)}>
                    Edit
                </Button>
            </Card.Body>
        </Card>
    )
}
export default CardBody