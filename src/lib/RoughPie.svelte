<script>
  import { Pie } from "rough-viz";
  import { useCreateChart } from "./utils.js";

  let { class: className, style, ...restProps } = $props();

  let prefix = "pie";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  useCreateChart(Pie, id, restProps);
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
