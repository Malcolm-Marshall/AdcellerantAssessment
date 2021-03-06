import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { animated } from '@react-spring/web'
import { Pie } from '@nivo/pie';

const commonProperties = {
  width: 550,
  height: 350,
  margin: { top: 80, right: 50, bottom: 80, left: 50 },
  animate: true,
  activeOuterRadiusOffset: 8,
}

const ClicksPie = ({ data }) => {

  let formattedData = [];

  let amazonObj = {
    id: 'Amazon',
    value: 0,
    color: "hsl(66, 70%, 50%)"
  };
  let facebookObj = {
    id: 'Facebook',
    value: 0,
    color: "hsl(130, 70%, 50%)"
  }
  let linkedInObj = {
    id: 'LinkedIn',
    value: 0,
    color: "hsl(354, 70%, 50%)"
  }
  let twitterObj = {
    id: 'Twitter',
    value: 0,
    color: "hsl(127, 70%, 50%)"
  }
  let googleObj = {
    id: 'Google',
    value: 0,
    color: "hsl(289, 70%, 50%)"
  }

  let total = 0;

  data.forEach((row) => {
    total += row.clicks;
    if (row.platform === 'Amazon') {
      amazonObj.value += row.clicks;
    } else if (row.platform === 'Facebook') {
      facebookObj.value += row.clicks;
    } else if (row.platform === 'LinkedIn') {
      linkedInObj.value += row.clicks;
    } else if (row.platform === 'Twitter') {
      twitterObj.value += row.clicks;
    } else if (row.platform === 'Google') {
      googleObj.value += row.clicks;
    }
  })

  formattedData.push(amazonObj, facebookObj, linkedInObj, twitterObj, googleObj);

  formattedData.forEach((platform) => {
    platform.value = (platform.value / total).toFixed(2) * 100;
  })

  const format = v => `${v}%`

  return (

    <Pie
      {...commonProperties}
      data={formattedData}
      valueFormat={format}
      tooltipFormat={format}
      axisLeft={{ format }}
      innerRadius={0.4}
      padAngle={0.5}
      cornerRadius={5}
      arcLinkLabelsColor={{
        from: 'color',
      }}
      arcLinkLabelsThickness={3}
      arcLinkLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 1.2]],
      }}
    />
  )
};

module.exports = ClicksPie;