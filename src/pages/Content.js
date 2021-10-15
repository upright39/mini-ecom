import React from 'react'
import { Card, Button } from "react-bootstrap"
import {useGlobalContext} from "../Context"

const Content = () => {
    const{goods}=useGlobalContext()
    
    return (   
        <section className="py-2 bg-light">
            <div className="row">

           { goods.map(({id,name,price,description,file_name})=>
                

             <Card style={{ width: '12rem' }} className="col-md-4 col-lg-3 col-sl-3 mx-auto my-2 card" key={id}>
                    <Card.Img variant="top" src={"http://localhost:8000/" + file_name} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           <h6> {description}</h6>
                        </Card.Text>
                        <div className="d-flex  button-wrapper" >
                            <Button variant="primary">Add</Button>
                            <h6>{price}</h6>
                        </div>
                    </Card.Body>
                </Card>


            )
               
            }

               
            </div>
        </section>
    )
}

export default Content
