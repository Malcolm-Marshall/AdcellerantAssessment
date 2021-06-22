import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ResponsiveBar } from '@nivo/bar';
import axios from 'axios';

const ByPlatform = ({ data }) => {

  const [amazon, setAmazon] = useState([]);
  const [facebook, setFacebook] = useState({});
  const [google, setGoogle] = useState({});
  const [linkedin, setLinkedin] = useState({});
  const [twitter, setTwitter] = useState({});

  useEffect(() => {
    getPlatforms();
  }, [])

  const getPlatforms = () => {
    axios.get('/api/getPlatform')
      .then((res) => {
        setAmazon(res.data.slice(0, 130));
      }).catch((err) => console.log(err))
    }
    console.log(amazon)

    return (
      <div>hi</div>
    // <ResponsiveBar
    //   data={finalDataFormat}
    //   keys={['Clicks', 'Impressions']}
    //   indexBy="product"
    //   margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    //   padding={0.3}
    //   valueScale={{ type: 'linear' }}
    //   indexScale={{ type: 'band', round: true }}
    //   colors={{ scheme: 'nivo' }}
    //   defs={[
    //     {
    //       id: 'dots',
    //       type: 'patternDots',
    //       background: 'inherit',
    //       color: '#38bcb2',
    //       size: 4,
    //       padding: 1,
    //       stagger: true
    //     },
    //     {
    //       id: 'lines',
    //       type: 'patternLines',
    //       background: 'inherit',
    //       color: '#eed312',
    //       rotation: -45,
    //       lineWidth: 6,
    //       spacing: 10
    //     }
    //   ]}
    //   fill={[
    //     {
    //       match: {
    //         id: 'fries'
    //       },
    //       id: 'dots'
    //     },
    //     {
    //       match: {
    //         id: 'sandwich'
    //       },
    //       id: 'lines'
    //     }
    //   ]}
    //   borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    //   axisTop={null}
    //   axisRight={null}
    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'Product',
    //     legendPosition: 'middle',
    //     legendOffset: 32
    //   }}
    //   axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: 'Amount',
    //     legendPosition: 'middle',
    //     legendOffset: -40
    //   }}
    //   labelSkipWidth={12}
    //   labelSkipHeight={12}
    //   labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    //   legends={[
    //     {
    //       dataFrom: 'keys',
    //       anchor: 'bottom-right',
    //       direction: 'column',
    //       justify: false,
    //       translateX: 120,
    //       translateY: 0,
    //       itemsSpacing: 2,
    //       itemWidth: 100,
    //       itemHeight: 20,
    //       itemDirection: 'left-to-right',
    //       itemOpacity: 0.85,
    //       symbolSize: 20,
    //       effects: [
    //         {
    //           on: 'hover',
    //           style: {
    //             itemOpacity: 1
    //           }
    //         }
    //       ]
    //     }
    //   ]}
    //   animate={true}
    //   motionStiffness={90}
    //   motionDamping={15}
    // />
    )
  };

  module.exports = ByPlatform;
