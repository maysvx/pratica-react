import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

  const params = useParams()

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
      setFilme(resultado.data)
    })

    apiFilmes.get('movie/' + params.id + '/credits?language=pt-BR').then(resultado => {
      setAtores(resultado.data.cast)
    })
  }, [])

  return (
    <div>

      {!filme.id && <h1>Carregando... Aguarde!</h1>}
      {filme.id &&
        <div>
          <h1>{filme.title}</h1>
          <h4 className="text-secondary">{filme.original_title}</h4>
          <br /> <br />

          <Row>
            <Col md={4}>
              <Card>
                <Card.Img title={filme.title} variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
              </Card>
            </Col>
            <Col md={8}>
              <p><strong>Popularidade: </strong>{filme.popularity}</p>
              <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
              <p><strong>Orçamento: </strong>{filme.budget}</p>
              <p><strong>Gêneros: </strong>
                {filme.genres.map(item => (
                  <span>{item.name}, </span>
                ))}
              </p>
              <p><strong>Sinopse: </strong>{filme.overview}</p>
              <br />
              <Link className='btn btn-primary' to={-1}>Voltar</Link>
              <br />
            </Col>
          </Row>
          <br />
          <h1>Atores</h1>
          <br />
          <Row>
            {atores.map(item => (

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

export default FilmesDetalhes