<script>
  import { Bar } from "rough-viz";
  import { useCreateChart } from "./utils.js";

  let { class: className, style, ...restProps } = $props();
  let prefix = "bar";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  useCreateChart(Bar, id, restProps);
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
