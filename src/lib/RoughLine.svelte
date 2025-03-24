<script>
  import { Line } from "rough-viz";
  import { useCreateChart } from "./utils.js";

  let { class: className, style, ...restProps } = $props();
  let prefix = "line";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  useCreateChart(Line, id, restProps);
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
