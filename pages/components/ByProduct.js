import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ResponsiveBar } from '@nivo/bar';

const ByProduct = ({ data }) => {

  let formatData = {};
  let finalDataFormat = [];

  for (let i = 0; i < data.length; i++) {
    const productObj = {
      clicks: 0,
      impressions: 0
    };

    if (!formatData[data[i].product]) {
      formatData[data[i].product] = Object.create(productObj);
      formatData[data[i].product].clicks = data[i].clicks;
      formatData[data[i].product].impressions = data[i].impressions;
    } else {
      formatData[data[i].product].clicks += data[i].clicks;
      formatData[data[i].product].impressions += data[i].impressions;
    }
  }

  for (let key in formatData) {
    let formatObj = {};
    formatObj["product"] = key;
    formatObj['Clicks'] = formatData[key].clicks;
    formatObj['Impressions'] = formatData[key].impressions;
    finalDataFormat.push(formatObj);
  }
  console.log(finalDataFormat)

  return (
    <ResponsiveBar
      data={finalDataFormat}
      keys={['Clicks', 'Impressions']}
      indexBy="product"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Product',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Amount',
        legendPosition: 'middle',
        legendOffset: -55
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />)
};

module.exports = ByProduct;
