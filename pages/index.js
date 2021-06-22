import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import ByProduct from './components/ByProduct.js';
import ByPlatform from './components/ByPlatform.js';
import Timeline from './components/Timeline.js';
import Test from './components/Test.js';
import { ResponsiveBar } from '@nivo/bar';

function HomePage() {

  const [data, setData] = useState([]);
  const [product, setProduct] = useState(false);
  const [platform, setPlatform] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get('/api/getData')
      .then((res) => {
        setData(res.data.slice(0, 650));
      }).catch((err) => console.log(err))
  };

  const view = (e) => {
    if (e.target.id === 'product') {
      setProduct(true);
      setPlatform(false);
    } else if (e.target.id === 'platform') {
      setPlatform(true);
      setProduct(false);
    } else if (e.target.id === 'all') {
      setPlatform(true);
      setProduct(true);
    }
  }

  return (
    <Container>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center', paddingTop: 10, alignContent: 'space-between'}}>
          Products A-Z
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              View
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" id="product" onClick={(e) => view(e)}>Product</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="platform" onClick={(e) => view(e)}>Platform</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="all" onClick={(e) => view(e)}>All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {product ?
        <Row>
          <Col style={{ height: '700px' }}>
            <ByProduct data={data} />
          </Col>
        </Row>
        : null
      }
      {platform ?
        <Row>
          <Col style={{ height: '700px' }}>
            <ByPlatform data={data} />
          </Col>
        </Row> : null
      }
      <Row>
        <Col style={{ height: '700px' }}>
          <Test data={data} />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;