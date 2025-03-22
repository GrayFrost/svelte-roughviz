<script>
  import { onMount } from "svelte";
  import Bar from "$lib/RoughBar.svelte";
  import BarH from "$lib/RoughBarH.svelte";
  import Donut from "$lib/RoughDonut.svelte";
  import Line from "$lib/RoughLine.svelte";
  import Pie from "$lib/RoughPie.svelte";
  import Scatter from "$lib/RoughScatter.svelte";
  import StackedBar from "$lib/RoughStackedBar.svelte";
  import Network from "$lib/RoughNetwork.svelte";
  import Force from "$lib/RoughForce.svelte";

  import { range } from "d3-array";

  let roughnessValue = 2.5;
  let strokeWidthValue = 1;
  let innerStrokeWidthValue = 1;
  let fillWeightValue = 1;
  let axisRoughnessValue = 0.5;
  let fillStyleValue = "hachure";
  let colorVal = "#87ceeb";
  let strokeVal = "#000000";

  let containerStyle = "width: 600px;height: 600px;";

  const numNodes = 104;
  const radius = 5;
  const dataLength = 20;

  const scatterData = {
    x: Array.from({ length: dataLength }, () => Math.random() * dataLength),
    y: Array.from({ length: dataLength }, () => Math.random() * dataLength),
    radius: Array.from(
      { length: dataLength },
      () => Math.floor(Math.random() * 20) + 1
    ),
  };

  function createNodes(numNodes) {
    return range(numNodes).map(() => {
      const randomValue = Math.random();

      let multiplier =
        randomValue < 0.05
          ? 5
          : randomValue < 0.6
            ? 1
            : randomValue < 0.8
              ? 2
              : 3;

      return {
        radius: multiplier * radius,
      };
    });
  }

  function createLinks(numNodes) {
    return range(numNodes - 1).map((d, i) => ({
      source: i,
      target: i + 1,
    }));
  }

  onMount(() => {
    mounted = true;
  });
</script>

<Bar
  style={containerStyle}
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  roughness={roughnessValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  highlight="steelblue"
  stroke={strokeVal}
  color={colorVal}
  fillStyle={fillStyleValue}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<BarH
  style={containerStyle}
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  roughness={roughnessValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  highlight="steelblue"
  stroke={strokeVal}
  color={colorVal}
  fillStyle={fillStyleValue}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
  padding={0.15}
/>

<Donut
  style={containerStyle}
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  roughness={roughnessValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  stroke={strokeVal}
  color={colorVal}
  highlight={"steelblue"}
  fillStyle={fillStyleValue}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<Line
  style={containerStyle}
  data={{ y: scatterData["y"], y2: scatterData["x"] }}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  roughness={roughnessValue}
  stroke={strokeVal}
  color={colorVal}
  fillStyle={fillStyleValue}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
  circle={false}
/>

<Pie
  style={containerStyle}
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  roughness={roughnessValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  stroke={strokeVal}
  color={colorVal}
  fillStyle={fillStyleValue}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<Scatter
  style={containerStyle}
  data={scatterData}
  roughness={roughnessValue}
  fillStyle={fillStyleValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  stroke={strokeVal}
  colors={colorVal}
  radius={20}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
></Scatter>

<StackedBar
  style={containerStyle}
  data={[
    { month: "Jan", A: 20, B: 5, C: 8, D: 12 },
    { month: "Feb", A: 25, B: 10, C: 9, D: 5 },
    { month: "March", A: 15, B: 5, C: 19, D: 9 },
  ]}
  labels="month"
  roughness={roughnessValue}
  fillStyle={fillStyleValue}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  stroke={strokeVal}
  color={colorVal}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<Network
  style={containerStyle}
  data={createNodes(35)}
  links={createLinks(35)}
  collision={3.05}
  radiusExtent={[10, 60]}
  roughness={roughnessValue}
  fillStyle={fillStyleValue}
  stroke={strokeVal}
  color={colorVal}
  margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
  textCallback={(d) => "Size: " + d.radius}
  strokeWidth={strokeWidthValue}
  axisStrokeWidth={1}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<Force
  style={containerStyle}
  data={createNodes(numNodes)}
  collision={1.2}
  textCallback={(d) => "Size: " + d.radius}
  radiusExtent={[10, 60]}
  roughness={roughnessValue}
  fillStyle={fillStyleValue}
  stroke={strokeVal}
  color={colorVal}
  strokeWidth={strokeWidthValue}
  innerStrokeWidth={innerStrokeWidthValue}
  fillWeight={fillWeightValue}
  axisRoughness={axisRoughnessValue}
/>

<style>
  :global(.link) {
    stroke: black;
    stroke-width: 1;
  }
</style>
