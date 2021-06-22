import React, { useState, useEffect } from 'react'
// import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { generateCountriesData, sets } from '@nivo/generators'
import range from 'lodash/range'
import random from 'lodash/random'
import { useTheme } from '@nivo/core'
import { Bar } from '@nivo/bar';

const keys = ['Amazon', 'Facebook', 'Google', 'LinkedIn', 'Twitter']
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }),
  // data: dateFormat,
  indexBy: 'date',
  keys,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

const Test1 = ({ data, dates }) => {

  const [formatted, setFormatted] = useState(null);
  useEffect(() => {
    (async () => {

      let dateFormat = {};

      dates.forEach((date) => {
        dateFormat[date.date] = {
          'date': date.date,
          Amazon: 0,
          AmazonColor: "hsl(259, 70%, 50%)",
          Facebook: 0,
          FacebookColor: "hsl(356, 70%, 50%)",
          Google: 0,
          GoogleColor: "hsl(250, 70%, 50%)",
          LinkedIn: 0,
          LinkedInColor: "hsl(100, 70%, 50%)",
          Twitter: 0,
          TwitterColor: "hsl(170, 70%, 50%)"
        }
      })


      data.forEach((row) => {
        for (let key in dateFormat) {
          if (row.date === key && row.platform === 'Amazon') {
            dateFormat[key].Amazon += row.clicks;
          } else if (row.date === key && row.platform === 'Facebook') {
            dateFormat[key].Facebook += row.clicks;
          } else if (row.date === key && row.platform === 'Google') {
            dateFormat[key].Google += row.clicks;
          } else if (row.date === key && row.platform === 'LinkedIn') {
            dateFormat[key].LinkedIn += row.clicks;
          } else if (row.date === key && row.platform === 'Twitter') {
            dateFormat[key].Twitter += row.clicks;
          }
        }
      })
      setFormatted(dateFormat)
    })()
  }, [])

  // console.log(dateFormat)


  return (
      <Bar
        {...commonProps}
        data={formatted}
        groupMode="grouped"
        layout="vertical"
        enableGridY={false}
        enableGridX={true}
      />
  )
};

module.exports = Test1;