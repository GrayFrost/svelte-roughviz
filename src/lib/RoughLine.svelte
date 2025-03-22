<script>
  import { Line } from "rough-viz";
  import { onCreateChart } from "./utils.js";

  let { class: className, style, ...restProps } = $props();
  let prefix = "line";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onCreateChart(Line, id, restProps);
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
