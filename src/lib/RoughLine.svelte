<script>
  import { onMount } from "svelte";
  import { Line } from "rough-viz";

  let { class: className, style, ...restProps } = $props();
  let prefix = "line";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onMount(() => {
    let instance = new Line({
      element: `#${id}`,
      ...restProps,
    });
    return () => {
      instance = null;
    };
  });
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
