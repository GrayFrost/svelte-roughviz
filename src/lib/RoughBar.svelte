<script>
  import { Bar } from "rough-viz";
  import { onCreateChart } from "./utils.js";

  let { class: className, style, ...restProps } = $props();
  let prefix = "bar";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onCreateChart(Bar, id, restProps);
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
