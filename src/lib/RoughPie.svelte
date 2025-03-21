<script>
  import { onMount } from "svelte";
  import { Pie } from "rough-viz";

  let { class: className, style, ...restProps } = $props();

  let prefix = "pie";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onMount(() => {
    let instance = new Pie({
      element: `#${id}`,
      ...restProps,
    });
    return () => {
      instance = null;
    };
  });
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
