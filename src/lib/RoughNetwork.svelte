<script>
  import { onMount } from "svelte";
  import { Network } from "rough-viz";

  let { class: className, style, ...restProps } = $props();
  let prefix = "network";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onMount(() => {
    let instance = new Network({
      element: `#${id}`,
      ...restProps,
    });
    return () => {
      instance = null;
    };
  });
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
