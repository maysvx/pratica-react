import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = () => {

    const params = useParams()
    const [ator, setAtor] = useState([])

    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

    }, [])

    return (
        <div>

            {!ator.id && <h1>Carregando... Aguarde!</h1>}
            {ator.id &&
                <div>
                    <h1>{ator.name}</h1>
                    <br />
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img title={ator.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Aniversario: </strong>{ator.birthday}</p>
                            <p><strong>Popularidade: </strong>{ator.popularity}</p>
                            <p><strong>Biografia: </strong>{ator.biography}</p>

                            <Link className='btn btn-primary' to={-1}>Voltar</Link>
                            <br />
                        </Col>
                    </Row>
                    <br />
                    <h1>Atores</h1>
                    <br />
                    <Row>
                        {filmes.map(item => (

                            <Col key={item.id} md={2} className='mb-3'>

                                <Card >
                                    <Card.Img title={item.name} variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.profile_path} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <br />
                                        <Link className="btn btn-danger" to={"/atores/" + item.id}>Ver mais</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        }
                    </Row>
                </div>
            }
        </div>
    )
}

export default AtoresDetalhes