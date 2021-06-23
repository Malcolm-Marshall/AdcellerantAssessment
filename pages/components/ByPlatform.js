import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ResponsiveBar } from '@nivo/bar';
import axios from 'axios';

const ByPlatform = ({ data }) => {

  let formattedData = [];

  let amazonObj = {
    platform: 'Amazon',
    Clicks: 0,
    Impressions: 0
  };
  let facebookObj = {
    platform: 'Facebook',
    Clicks: 0,
    Impressions: 0
  }
  let linkedInObj = {
    platform: 'LinkedIn',
    Clicks: 0,
    Impressions: 0
  }
  let twitterObj = {
    platform: 'Twitter',
    Clicks: 0,
    Impressions: 0
  }
  let googleObj = {
    platform: 'Google',
    Clicks: 0,
    Impressions: 0
  }

  data.forEach((row) => {
    if (row.platform === 'Amazon') {
      amazonObj.Clicks += row.clicks;
      amazonObj.Impressions += row.impressions;
    } else if (row.platform === 'Facebook') {
      facebookObj.Clicks += row.clicks;
      facebookObj.Impressions += row.impressions;
    } else if (row.platform === 'LinkedIn') {
      linkedInObj.Clicks += row.clicks;
      linkedInObj.Impressions += row.impressions;
    } else if (row.platform === 'Twitter') {
      twitterObj.Clicks += row.clicks;
      twitterObj.Impressions += row.impressions;
    } else if (row.platform === 'Google') {
      googleObj.Clicks += row.clicks;
      googleObj.Impressions += row.impressions;
    }
 })

 formattedData.push(amazonObj, facebookObj, linkedInObj, twitterObj, googleObj);

  return (
    <ResponsiveBar
      data={formattedData}
      keys={['Clicks', 'Impressions']}
      indexBy="platform"
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
        legend: 'Platform',
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
    />
  )
};

module.exports = ByPlatform;
