<script>
  import { onMount } from "svelte";
  import { Bar } from "rough-viz";

  let { class: className, style, ...restProps } = $props();
  let prefix = "bar";
  let uid = $props.id();

  let id = `${prefix}-${uid}`;

  onMount(() => {
    let instance = new Bar({
      element: `#${id}`,
      ...restProps,
    });
    return () => {
      instance = null;
    };
  });
</script>

<div {id} style={style || "width:100vw;height:100vh;"} class={className}></div>
