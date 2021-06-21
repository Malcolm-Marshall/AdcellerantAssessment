import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const ByProduct = ({ data }) => {

  return (
    <Container>
      <Row>
        <Col>
          {data.map((row) => {
            return (
              <>
              <p>Product: {row.product}</p>
              <p>Platform: {row.platform}</p>
              <p>Impressions: {row.impressions}</p>
              <p>Clicks: {row.clicks}</p>
              <p>Date: {row.date}</p>
              <hr></hr>
              </>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
};

module.exports = ByProduct;