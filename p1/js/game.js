let app = new Vue({
  el: "#app",
  data: {
    choices: { rock: 0, paper: 2, scissors: 1 },
    humanScore: 0,
    compScore: 0,
    verdict: `<span>Make your choice, human.</span>
                  <span>You will never win.</span>`
  },
  methods: {
    scoreIt: function(humanValue) {
      let computerValue = Math.floor(
        Math.random() * Object.keys(this.choices).length
      );
      let computerChoice = Object.keys(this.choices)[
        Object.values(this.choices).indexOf(computerValue)
      ];
      let result = this.mod(humanValue - computerValue, 3);
      if (result == 1) {
        this.verdict = `<span>You lose!</span> 
                                <span>The computer chose ${computerChoice}.</span>`;
        this.compScore++;
      } else if (result == 2) {
        this.verdict = `<span>You win!</span> 
                                <span>The computer chose ${computerChoice}.</span>`;
        this.humanScore++;
      } else {
        this.verdict = `<span>It's a tie.</span>
                                <span>The computer chose ${computerChoice}.</span>`;
      }
    },
    mod: function(n, m) {
      return ((n % m) + m) % m;
    }
  }
});
