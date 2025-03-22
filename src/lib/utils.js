import { onMount } from "svelte";

export const onCreateChart = (ChartType, id, restProps) => {
  // const uid = $props.id();

  // const prefix = ChartType.name;

  // let id = `${prefix}-${uid}`;
  onMount(() => {
    let instance;
    try {
      instance = new ChartType({
        element: `#${id}`,
        ...restProps,
      });
    } catch (e) {
      console.error(`${id} error`, e);
    }

    return () => {
      instance?.remove();
      instance = null;
    };
  });
};
