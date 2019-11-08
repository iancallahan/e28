<template>
  <div augmented-ui="b-clip-y exe" class="score human">
    <span>{{ participant }}</span>
    <span class="tally">{{ score }}</span>
  </div>
</template>

<script>
export default {
  props: ["participant", "score"]
};
</script>

<style lang="scss">
.score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  width: 120px;
  height: 150px;
  --aug-border: 5px;
  --aug-inset: 5px;
  --aug-border-bg: gold;
  --aug-inset-bg: gold;
  padding: 10px; /* mind the gap */
  text-align: center;
  color: black;
}
</style>