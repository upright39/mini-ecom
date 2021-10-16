import React from 'react'
import { Card } from "react-bootstrap"
import { useGlobalContext } from "../Context"

const Content = () => {
    const { goods } = useGlobalContext()

    return (
        <section className="py-4 bg-light">
            <div className="row ">

                {goods.map(({ id, name, price, description, file_name }) =>


                    <Card style={{ width: '12.5rem' }} className="col-md-4  mx-auto my-2 card " key={id}>
                        <Card.Img variant="top" src={"http://localhost:8000/" + file_name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <div className="d-flex  button-wrapper" >
                                <button className="button">Add</button>
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
