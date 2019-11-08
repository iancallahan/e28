<template>
  <div>
    <div class="controls">
      <button
        class="choice"
        augmented-ui="t-clip-x exe"
        v-for="(item, index) in choices"
        v-bind:key="index"
        v-on:click="scoreIt(item)"
      >{{ index }}</button>
    </div>
    <game-results :result="result" :choice="choice"></game-results>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      choices: { rock: 0, paper: 2, scissors: 1 },
      choice: "rock",
      result: -1
    };
  },
  methods: {
    scoreIt: function(humanValue) {
      let computerValue = Math.floor(
        Math.random() * Object.keys(this.choices).length
      );
      this.choice = Object.keys(this.choices)[
        Object.values(this.choices).indexOf(computerValue)
      ];
      this.result = this.mod(humanValue - computerValue, 3);
    },
    mod: function(n, m) {
      return ((n % m) + m) % m;
    }
  }
};
</script>

<style lang="scss">
.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.choice {
  --aug-t: 10px;
  --aug-t-width: 33%;
  --aug-border: 5px;
  --aug-inset: 5px;
  --aug-border-bg: gold;
  --aug-inset-bg: gold;
  background-color: black;
  font-family: "Checkbook";
  font-size: 1.5em;
  border: none;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  width: 200px;
  margin: 1em;
}
</style>
