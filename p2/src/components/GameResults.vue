<template>
  <div class="scoring">
    <score-box :score="humanScore" augmented="l-clip-y exe" participant="HMN"></score-box>
    <div v-html="verdict" class="verdict scanline"></div>
    <score-box :score="compScore" augmented="r-clip-y exe" participant="CMP"></score-box>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      verdict: `<span>Make your choice, human.</span>
                  <span>You will never win.</span>`,
      compScore: 0,
      humanScore: 0
    };
  },
  props: ["result", "choice"],
  watch: {
    result: function(newVal, oldVal) {
      if (newVal == 1) {
        this.verdict = `<span>You lose!</span> 
                            <span>The computer chose ${this.choice}.</span>`;
        this.compScore++;
      } else if (newVal == 2) {
        this.verdict = `<span>You win!</span> 
                            <span>The computer chose ${this.choice}.</span>`;
        this.humanScore++;
      } else {
        this.verdict = `<span>It's a tie.</span>
                            <span>The computer chose ${this.choice}.</span>`;
      }
    }
  }
};
</script>

<style lang="scss">
.scoring {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.verdict {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  width: 500px;
  font-size: 1.5em;
}

.scanline {
  mask-image: repeating-linear-gradient(black, black 2px, transparent 3px);
}
</style>