import React, { Component, useState, useEffect } from 'react'
import range from 'lodash/range'
import last from 'lodash/last'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { Defs, linearGradientDef } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import * as time from 'd3-time'
import { timeFormat } from 'd3-time-format'
import { ResponsiveLine } from '@nivo/line';
import {Row, Container, Col} from 'react-bootstrap'

const commonProperties = {
  width: 1000,
  height: 500,
  margin: {  top: 50, right: 130, bottom: 50, left: 60 },
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

const Timeline = ({ data, dates }) => {

  let dataFormat = {};

  dates.forEach((date) => {
    dataFormat[date.date] = { 'clicks': 0, 'impressions': 0 }
  })

  data.forEach((row) => {
    for (let key in dataFormat) {
      if (row.date === key) {
        dataFormat[key].clicks += row.clicks;
        dataFormat[key].impressions += row.impressions;
      }
    }
  })
  console.log(dataFormat)

  let finalDataFormat = [
    {
    id: 'Clicks',
    'color': "hsl(284, 70%, 50%)",
    data: []
    },
    {
      id: 'Impressions',
      'color': "hsl(87, 70%, 50%)",
      data: []
    }
  ];

  for (let key in dataFormat) {
    finalDataFormat[0].data.push({x: key, y: dataFormat[key].clicks})
    finalDataFormat[1].data.push({x: key, y: dataFormat[key].impressions})
  }

  return (
  <>
  <ResponsiveLine
    {...commonProperties}
    data={finalDataFormat}
    lineWidth={6}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      useUTC: false,
      precision: 'day',
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false
    }}
    axisLeft={{
      legend: 'Amount',
      legendOffset: -50,
    }}
    axisBottom={{
      format: '%b %d',
      tickValues: 'every 1 days',
      legend: 'Day',
      legendOffset: -15,
    }}
    curve={select('curve', curveOptions, 'monotoneX')}
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
    legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
  />
  </>

  )
};

module.exports = Timeline;