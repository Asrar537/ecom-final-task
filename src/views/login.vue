<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="title text-center">
          <h2 class="position-relative d-inline-block">Login</h2>
        </div>
        <div class="card px-5 py-5" id="formvalidation">
          <div class="form-data" v-if="!submitted">
            <div class="forms-inputs mb-4">
              <span>Email</span>
              <input
                autocomplete="off"
                type="text"
                v-model="form.email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validEmail(form.email),
                }"
                v-on:blur="emailBlured = true"
              />
              <div class="invalid-feedback">A valid email is required!</div>
            </div>
            <div class="forms-inputs mb-4">
              <span>Password</span>
              <input
                autocomplete="off"
                type="password"
                v-model="form.password"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validPassword(form.password) ,
                }"
                v-on:blur="passwordBlured = true"
              />
              <div class="invalid-feedback">Password must be 7 character!</div>
            </div>
            <div class="mb-3">
              <button
                v-on:click.stop.prevent="submit"
                class="btn btn-dark w-100"
              >
                Login
              </button>
            </div>
          </div>
        <h2>kminchelle</h2>
        <h3>0lelplR</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form:{
        email: "",
      password: "",

      },
      
      valid: false,
      submitted: false,
      
    };
  },


  methods: {
    validate: function () {
     
      if (this.validEmail(this.form.email) && this.validPassword(this.form.password)) {
        this.valid = true;
      }
    },

    validEmail: function (email) {
      // var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if (email) {
        return true;
      }
    },

    validPassword: function (password) {
      if (password.length > 6) {
        return true;
      }
    },
    
    submit: async function () {
      this.validate();
      if (this.valid) {
      this.$store.dispatch('logInUser', this.form);
      
      this.$router.push('/')

  
      }
      
    },
    mounted() {
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 10rem;
}
.card {
  border: none;
}
.forms-inputs {
  position: relative;
}
.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}
.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}
.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}
.btn {
  height: 50px;
}
.success-data {
  display: flex;
  flex-direction: column;
}
.bxs-badge-check {
  font-size: 90px;
}
</style>
