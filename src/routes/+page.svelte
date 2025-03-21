<script>
  import Bar from "$lib/RoughBar.svelte";
  import BarH from "$lib/RoughBarH.svelte";
  import Donut from "$lib/RoughDonut.svelte";
  import Line from "$lib/RoughLine.svelte";
  import Pie from "$lib/RoughPie.svelte";
  import Scatter from "$lib/RoughScatter.svelte";
  import StackedBar from "$lib/RoughStackedBar.svelte";
</script>

<Bar
  style="width: 500px;height: 500px;"
  data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
  labels="flavor"
  values="price"
/>

<BarH
  style="width: 500px;height: 500px;"
  title="Vehicles I've Had"
  titleFontSize="1.5rem"
  legend={false}
  margin={{ top: 50, bottom: 100, left: 160, right: 0 }}
  data={{
    labels: [
      "1992 Ford Aerostar Van",
      "2013 Kia Rio",
      "1980 Honda CB 125s",
      "1992 Toyota Tercel",
    ],
    values: [8, 4, 6, 2],
  }}
  xLabel="Time Owned (Years)"
  strokeWidth="2"
  fillStyle="zigzag-line"
  highlight="gold"
/>

<Donut
  style="width: 500px;height: 500px;"
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  title="Regions"
  roughness="8"
  colors={["red", "orange", "blue", "skyblue"]}
  stroke="black"
  strokeWidth="3"
  fillStyle="cross-hatch"
  fillWeight="3.5"
/>

<Line
  style="width: 500px;height: 500px;"
  data="https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv"
  y1="revenue"
  y2="cost"
  y3="profit"
/>

<Pie
  style="width: 500px;height: 500px;"
  data={{
    labels: ["North", "South", "East", "West"],
    values: [10, 5, 8, 3],
  }}
  title="Regions"
  colors={["red", "orange", "blue", "skyblue"]}
  roughness={8}
  strokeWidth={3}
/>

<Scatter
  style="width: 500px;height: 500px;"
  data="https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv"
  title="Iris Scatter Plot"
  x="sepal_width"
  y="petal_length"
  colorVar="species"
  highlightLabel="species"
  fillWeight="4"
  radius="12"
  colors={["pink", "coral", "skyblue"]}
  stroke="black"
  strokeWidth="0.4"
  roughness="1"
  font="0"
  xLabel="sepal width"
  yLabel="petal length"
  curbZero="false"
></Scatter>

<StackedBar
  style="width: 500px;height: 500px;"
  data={[
    { month: "Jan", A: 20, B: 5, C: 10 },
    { month: "Feb", A: 25, B: 10, C: 20 },
    { month: "March", A: 30, B: 50, C: 10 },
  ]}
  labels="month"
  title="Monthly Revenue"
  roughness="2"
  colors={["blue", "#f996ae", "skyblue", "#9ff4df"]}
  fillWeight="0.35"
  strokeWidth="0.5"
  fillStyle="cross-hatch"
  stroke="black"
/>
