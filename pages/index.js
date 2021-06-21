import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import ByProduct from './components/ByProduct.js';

function HomePage() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get('/api/getData')
      .then((res) => {
        setData(res.data.slice(0, 650));
      }).catch((err) => console.log(err))
  }

  return (
    <Container>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          Product Data
        </Col>
      </Row>
      <ByProduct data={data}/>
    </Container>
  )
}

export default HomePage;