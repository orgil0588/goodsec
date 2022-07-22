
import useFetch from '../../hooks/useFetch';
// import Treemap from './component/Treemap';
import { ResponsiveTreeMap  } from "@nivo/treemap";


const Heatmap = () => {

  const [data, setData] = useFetch('http://localhost:8080/api/utils/treemap')
  const COLOR = [
    "#ef4444",
    "#ef4444",
    "#ef4444",
    "#dc2626",
    "#dc2626",
    "#dc2626",
    "#b91c1c",
    "#b91c1c",
    "#b91c1c",
    "#991b1b",
    "#991b1b",
    "#991b1b",
    '#7f1d1d',
    '#7f1d1d',
    '#7f1d1d',

    "#374151",

    "#14532d",
    "#14532d",
    "#14532d",
    "#166534",
    "#166534",
    "#166534",
    "#15803d",
    "#15803d",
    "#15803d",
    "#16a34a",
    "#16a34a",
    "#16a34a",
    "#22c55e",
    "#22c55e",
    "#22c55e",
  ]
  console.log(COLOR[0 + 15])
  return (
    <>
      {data &&
        console.log(data)
      }
      {data &&
        <div style={{ height: 780 }}>
          <ResponsiveTreeMap
            data={{
              name: "root",
              children: data
            }}
            colorBy={""}
            nodeOpacity={1}
            borderWidth={1}
            animate={false}
            identity="name"
            value="value"
            valueFormat=".02s"
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            labelSkipSize={12}
            labelTextColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  4
                ]
              ]
            }}
            parentLabelPadding={10}
            parentLabelPosition="top"
            parentLabelTextColor={{
              from: 'color',
              modifiers: [
                [
                  'brighter',
                  4
                ]
              ]
            }}
            borderColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  2
                ]
              ]
            }}  
          />
        </div>
      }
    </>


  );
}

export default Heatmap;