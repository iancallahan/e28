<template>
  <div id="complaint-container">
    <textarea v-model="complaint" placeholder="State your grievance."></textarea>
    <div
      id="complainer-identity"
      class="form-group"
      :class="{ 'form-group--error': $v.email.$invalid }"
    >
      <input v-model="email" />
      <button @click="submitGrievance()" :disabled="$v.email.$invalid">Complain</button>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "ComplaintPage",
  data() {
    return {
      email: "",
      complaint: ""
    };
  },
  methods: {
    submitGrievance: function() {
      if (
        confirm(
          `Are you sure you want to file this grievance ("${this.complaint}"), ${this.email}?`
        )
      ) {
        this.$store.commit("incrementComplaints");
        this.$router.push({ name: "home" });
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style>
.form-group {
    padding: 2em;
}

.form-group--error {
  background-color: red;
}
</style>