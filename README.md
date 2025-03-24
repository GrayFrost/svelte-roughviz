# svelte-roughviz

It's a Svelte-wrapper for [roughViz.js](https://github.com/jwilber/roughViz). See examples in the `+page.svelte`.

## Installation

```bash
npm install svelte-roughviz
```

## Components

- Bar,
- BarH,
- Donut,
- Line,
- Pie,
- Scatter,
- StackedBar

## Usage

Example for using the BarH-Chart.

```svelte
<BarH
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
```

Useful tip: 
- You can use props `style` and `class` to customize the chart's style.
- add `.link {// your style}` when using `Network` component.