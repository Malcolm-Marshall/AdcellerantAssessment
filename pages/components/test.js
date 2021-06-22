
import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = () => {

  let data = [
    {
      "country": "AD",
      "hot dog": 62,
      "hot dogColor": "hsl(248, 70%, 50%)",
      "burger": 133,
      "burgerColor": "hsl(197, 70%, 50%)",
      "sandwich": 87,
      "sandwichColor": "hsl(353, 70%, 50%)",
      "kebab": 147,
      "kebabColor": "hsl(323, 70%, 50%)",
      "fries": 169,
      "friesColor": "hsl(271, 70%, 50%)",
      "donut": 18,
      "donutColor": "hsl(189, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 106,
      "hot dogColor": "hsl(45, 70%, 50%)",
      "burger": 23,
      "burgerColor": "hsl(223, 70%, 50%)",
      "sandwich": 50,
      "sandwichColor": "hsl(178, 70%, 50%)",
      "kebab": 189,
      "kebabColor": "hsl(11, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(148, 70%, 50%)",
      "donut": 190,
      "donutColor": "hsl(327, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 167,
      "hot dogColor": "hsl(11, 70%, 50%)",
      "burger": 159,
      "burgerColor": "hsl(252, 70%, 50%)",
      "sandwich": 166,
      "sandwichColor": "hsl(207, 70%, 50%)",
      "kebab": 124,
      "kebabColor": "hsl(44, 70%, 50%)",
      "fries": 39,
      "friesColor": "hsl(330, 70%, 50%)",
      "donut": 180,
      "donutColor": "hsl(263, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 55,
      "hot dogColor": "hsl(213, 70%, 50%)",
      "burger": 124,
      "burgerColor": "hsl(340, 70%, 50%)",
      "sandwich": 61,
      "sandwichColor": "hsl(142, 70%, 50%)",
      "kebab": 89,
      "kebabColor": "hsl(261, 70%, 50%)",
      "fries": 113,
      "friesColor": "hsl(239, 70%, 50%)",
      "donut": 83,
      "donutColor": "hsl(231, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 19,
      "hot dogColor": "hsl(263, 70%, 50%)",
      "burger": 45,
      "burgerColor": "hsl(287, 70%, 50%)",
      "sandwich": 20,
      "sandwichColor": "hsl(346, 70%, 50%)",
      "kebab": 115,
      "kebabColor": "hsl(330, 70%, 50%)",
      "fries": 127,
      "friesColor": "hsl(124, 70%, 50%)",
      "donut": 40,
      "donutColor": "hsl(347, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 37,
      "hot dogColor": "hsl(236, 70%, 50%)",
      "burger": 154,
      "burgerColor": "hsl(259, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(105, 70%, 50%)",
      "kebab": 167,
      "kebabColor": "hsl(78, 70%, 50%)",
      "fries": 31,
      "friesColor": "hsl(311, 70%, 50%)",
      "donut": 54,
      "donutColor": "hsl(82, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 116,
      "hot dogColor": "hsl(135, 70%, 50%)",
      "burger": 91,
      "burgerColor": "hsl(223, 70%, 50%)",
      "sandwich": 161,
      "sandwichColor": "hsl(34, 70%, 50%)",
      "kebab": 34,
      "kebabColor": "hsl(348, 70%, 50%)",
      "fries": 116,
      "friesColor": "hsl(13, 70%, 50%)",
      "donut": 184,
      "donutColor": "hsl(356, 70%, 50%)"
    }
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
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

module.exports = MyResponsiveBar;
