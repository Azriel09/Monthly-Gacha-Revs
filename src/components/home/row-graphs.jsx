import { ResponsiveBar } from "@nivo/bar";
import "./gacha-table-styles.scss";
export default function RowGraphs({ month1, month2, gameData }) {
  const downloadsData = gameData.expandData
    .map((item) => {
      const androidDownloads = item.downloadsAndroid[0];
      const appleDownloads = item.downloadsApple[0];
      const androidDownloads2 = item.downloadsAndroid[1];
      const appleDownloads2 = item.downloadsApple[1];
      return [
        {
          month: month1,
          android: androidDownloads,
          apple: appleDownloads,
        },
        {
          month: month2,
          android: androidDownloads2,
          apple: appleDownloads2,
        },
      ];
    })
    .flat();

  const revenueData = gameData.expandData
    .map((item) => {
      const androidRevenue = item.revenueAndroid[0];
      const appleRevenue = item.revenueApple[0];
      const androidRevenue2 = item.revenueAndroid[1];
      const appleRevenue2 = item.revenueApple[1];
      return [
        {
          month: month1,
          android: androidRevenue,
          apple: appleRevenue,
        },
        { month: month2, android: androidRevenue2, apple: appleRevenue2 },
      ];
    })
    .flat();

  return (
    <div className="charts-wrapper">
      {downloadsData ? (
        <ResponsiveBar
          data={downloadsData}
          keys={["android", "apple"]}
          indexBy="month"
          margin={{ top: 50, right: 50, bottom: 40, left: 50 }}
          padding={0.3}
          theme={{
            axis: {
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: "#d3d3d3",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              legend: {
                text: {
                  fontSize: 20,
                  fill: "#d3d3d3",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            tooltip: {
              color: "#000",
            },
          }}
          layout="vertical"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "paired" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={{
            legend: "Downloads",
            legendOffset: -30,
            legendPosition: "middle",
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,

            legendPosition: "middle",
            legendOffset: 32,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          role="application"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in category: " + e.indexValue
          }
        />
      ) : null}
      {revenueData ? (
        <ResponsiveBar
          data={revenueData}
          keys={["android", "apple"]}
          indexBy="month"
          margin={{ top: 50, right: 50, bottom: 40, left: 50 }}
          padding={0.3}
          theme={{
            text: {
              fontSize: 36,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            axis: {
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: "#d3d3d3",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              legend: {
                text: {
                  fontSize: 20,
                  fill: "#d3d3d3",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            tooltip: {
              color: "#000",
            },
            text: {
              fontSize: 40,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          }}
          layout="vertical"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "paired" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={{
            legend: "Revenue",
            legendOffset: -30,
            legendPosition: "middle",
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,

            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "value",
            legendPosition: "middle",
            legendOffset: -90,
          }}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          role="application"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in category: " + e.indexValue
          }
        />
      ) : null}
    </div>
  );
}
