<script>
  import { onMount } from "svelte";
  import { Donut } from "rough-viz";

  let { class: className, style, ...restProps } = $props();
  let prefix = "donut";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onMount(() => {
    let instance = new Donut({
      element: `#${id}`,
      ...restProps,
    });
    return () => {
      instance = null;
    };
  });
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
