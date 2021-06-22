import React, { Component, useState, useEffect } from 'react'
import range from 'lodash/range'
import last from 'lodash/last'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { Defs, linearGradientDef } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import * as time from 'd3-time'
import { timeFormat } from 'd3-time-format'
import { Line } from '@nivo/line';

const commonProperties = {
    width: 900,
    height: 400,
    margin: { top: 20, right: 20, bottom: 60, left: 80 },
    animate: true,
    enableSlices: 'x',
}

const curveOptions = ['linear', 'monotoneX', 'step', 'stepBefore', 'stepAfter']

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
    <g>
        <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
        <circle
            r={size / 5}
            strokeWidth={borderWidth}
            stroke={borderColor}
            fill={color}
            fillOpacity={0.35}
        />
    </g>
);






const Test = ({ data }) => {

  let formatData =[
    {id: 'Amazon Clicks',
     data: []
    },
    {id: 'Amazon Impressions',
     data: []
    },
    {id: 'Facebook Clicks',
     data: []
    },
    {id: 'Facebook Impressions',
     data: []
    },
    {id: 'Google Clicks',
     data: []
    },
    {id: 'Google Impressions',
     data: []
    },
    {id: 'LinkedIn Clicks',
     data: []
    },
    {id: 'LinkedIn Impressions',
     data: []
    },
    {id: 'Twitter Clicks',
     data: []
    },
    {id: 'Twitter Impressions',
     data: []
    }
  ];

  data.forEach((row) => {
    if (row.platform === 'Amazon') {
      if (formatData[0].x !== undefined) {
        formatData[0].y += row.clicks
      } else {
        formatData[0].data.push({x: row.date, y:row.clicks})
      }
      if (formatData[1].x) {
        formatData[1].y += row.clicks
      } else {
      formatData[1].data.push({x: row.date, y:row.impressions})}}
    // } else if (row.platform === 'Facebook') {
    //   formatData[2].data.push({x: row.date, y:row.clicks})
    //   formatData[3].data.push({x: row.date, y:row.impressions})
    // } else if (row.platform === 'Google') {
    //   formatData[4].data.push({x: row.date, y:row.clicks})
    //   formatData[5].data.push({x: row.date, y:row.impressions})
    // } else if (row.platform === 'LinkedIn') {
    //   formatData[6].data.push({x: row.date, y:row.clicks})
    //   formatData[7].data.push({x: row.date, y:row.impressions})
    // } else if (row.platform === 'Twitter') {
    //   formatData[8].data.push({x: row.date, y:row.clicks})
    //   formatData[9].data.push({x: row.date, y:row.impressions})
    // }
  })

  let dataFormat = [
    {id: 'Clicks', data: []},
    {id: 'Impressions', data: []}
  ];

  data.forEach((row) => {
    if (dataFormat[0].data.x === row.date) {
      dataFormat[0].data.y += row.clicks;
    } else {
      dataFormat[0].data.push({x: row.date, y: row.clicks})
    }
    if (dataFormat[1].data.x === row.date) {
      dataFormat[1].data.y += row.impressions;
    } else {
      dataFormat[1].data.push({x: row.date, y: row.impressions})
    }
  });

  console.log(dataFormat)

  console.log(formatData)
  return (<Line
        {...commonProperties}
        // data={[
        //     {
        //         id: 'fake corp. A',
        //         data: [
        //             { x: '2018-01-01', y: 7 },
        //             { x: '2018-01-02', y: 5 },
        //             { x: '2018-01-03', y: 11 },
        //             { x: '2018-01-04', y: 9 },
        //             { x: '2018-01-05', y: 12 },
        //             { x: '2018-01-06', y: 16 },
        //             { x: '2018-01-07', y: 13 },
        //             { x: '2018-01-08', y: 13 },
        //         ],
        //     },
        //     {
        //         id: 'fake corp. B',
        //         data: [
        //             { x: '2018-01-04', y: 14 },
        //             { x: '2018-01-05', y: 14 },
        //             { x: '2018-01-06', y: 15 },
        //             { x: '2018-01-07', y: 11 },
        //             { x: '2018-01-08', y: 10 },
        //             { x: '2018-01-09', y: 12 },
        //             { x: '2018-01-10', y: 9 },
        //             { x: '2018-01-11', y: 7 },
        //         ],
        //     },
        // ]}
        data={dataFormat}
        xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            useUTC: false,
            precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
            type: 'linear',
            stacked: boolean('stacked', false),
        }}
        axisLeft={{
            legend: 'linear scale',
            legendOffset: 12,
        }}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 1 days',
            legend: 'time scale',
            legendOffset: -12,
        }}
        curve={select('curve', curveOptions, 'linear')}
        enablePointLabel={true}
        pointSymbol={CustomSymbol}
        pointSize={16}
        pointBorderWidth={1}
        pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
    />)
};

module.exports = Test;