import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import ByProduct from './components/ByProduct.js';
import ByPlatform from './components/ByPlatform.js';
import Timeline from './components/Timeline.js';
import ClicksPie from './components/ClicksPie.js';
import ImpressionsPie from './components/ImpressionsPie.js';
import { ResponsiveBar } from '@nivo/bar';

function HomePage() {

  const [data, setData] = useState([]);
  const [product, setProduct] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [timeline, setTimeline] = useState(false);
  const [home, setHome] = useState(true);
  const [dates, setDates] = useState([]);
  const [maxClicks, setMaxClicks] = useState({});
  const [maxImpressions, setMaxImpressions] = useState({});

  useEffect(() => {
    getData();
    getDates();
    getMaxClicks();
    getMaxImpressions();
  }, [])

  const getData = () => {
    axios.get('/api/getData')
      .then((res) => {
        setData(res.data.slice(0, 650));
      }).catch((err) => console.log(err))
  };

  const getDates = () => {
    axios.get('/api/getDates')
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => console.log(err))
  };

  const getMaxClicks = () => {
    axios.get('/api/getMaxClicks')
    .then((res) => {
      setMaxClicks(res.data[0]);
    })
    .catch((err) => console.log(err))
  }

  const getMaxImpressions = () => {
    axios.get('/api/getMaxImpressions')
    .then((res) => {
      console.log(res.data)
      setMaxImpressions(res.data[0]);
    })
    .catch((err) => console.log(err))
  }


  const view = (e) => {
    if (e.target.id === 'product') {
      setProduct(true);
      setPlatform(false);
      setTimeline(false);
      setHome(false);
    } else if (e.target.id === 'platform') {
      setPlatform(true);
      setProduct(false);
      setTimeline(false);
      setHome(false);
    } else if (e.target.id === 'all') {
      setPlatform(true);
      setProduct(true);
      setTimeline(true);
      setHome(false);
    } else if (e.target.id === 'timeline') {
      setTimeline(true);
      setPlatform(false);
      setProduct(false);
      setHome(false);
    } else if (e.target.id === 'home') {
      setHome(true);
      setTimeline(false);
      setPlatform(false);
      setProduct(false);
    }
  }

  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, alignContent: 'space-between' }}>
          <h2>Products A-Z</h2>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }}>
          <h3 id="home" onClick={(e) => view(e)}>Home</h3>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              View
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" id="product" onClick={(e) => view(e)}>Product</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="platform" onClick={(e) => view(e)}>Platform</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="timeline" onClick={(e) => view(e)}>Timeline</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="all" onClick={(e) => view(e)}>All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {
        home ?
        <>
         <Row>
           <Col style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 100 }}>
             Clicks
           </Col>
           <Col style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 100 }}>
             Impressions
           </Col>
         </Row>
         <Row>
           <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
             <ClicksPie data={data} />
             <ImpressionsPie data={data} />
           </Col>
          </Row>
          <Row>
            <Col md='6' style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
              <p>
              {`Maximum Clicks: Product ${maxClicks.product}`}
              </p>
              <p>
                {`Platform: ${maxClicks.platform}`}
              </p>
              <p>
                {`Clicks: ${maxClicks.clicks}`}
              </p>
              <p>
                {`Impressions: ${maxClicks.impressions}`}
              </p>
              <p>
                {`Date: ${maxClicks.date}`}
              </p>
            </Col>
            <Col className="justify-content-md-right">
              <p>
              {`Maximum Impressions: Product ${maxImpressions.product}`}
              </p>
              <p>
                {`Platform: ${maxImpressions.platform}`}
              </p>
              <p>
                {`Clicks: ${maxImpressions.clicks}`}
              </p>
              <p>
                {`Impressions: ${maxImpressions.impressions}`}
              </p>
              <p>
                {`Date: ${maxImpressions.date}`}
              </p>
            </Col>
          </Row>
          <Row>
          </Row>
        </> : null}
      {product ?
        <Row>
        <Col style={{display: 'flex', justifyContent: 'center', paddingTop: 100}}>
          <h3>Products</h3>
        </Col>
          <Col style={{ height: '700px' }}>
            <ByProduct data={data} />
          </Col>
        <Col style={{display: 'flex', justifyContent: 'center', paddingTop: 50}}>
          <h3>Platforms</h3>
        </Col>
        </Row>
        : null
      }
      {platform ?
        <Row>
          <Col style={{ height: '700px' }}>
            <ByPlatform data={data} />
          </Col>
          <Col style={{display: 'flex', justifyContent: 'center', paddingTop: 100}}>
          <h3>Timeline</h3>
        </Col>
        </Row>
         : null
      }
      {timeline ? <Row>
        <Col style={{ height: '700px', width: '100%', justifyContent: 'center'}}>
          <Timeline data={data} dates={dates} />
        </Col>
      </Row> : null}
    </Container>
  )
}

export default HomePage;