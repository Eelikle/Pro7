<template>
  <div class="container">
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <h2>Login</h2>
    <hr />
    <form>
      <label for="usr">Email:</label>
      <input v-model="email" type="text" class="form-control" id="usr" />
      <label for="usr">Password:</label>
      <input v-model="password" type="password" class="form-control" id="pwd" />
      <button @click.prevent="loginPage"  type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {


  name: "loginPage",
  data: () => ({
    email: "",
    password: "",
    error: "",
  }),
  methods: {
    loginPage() {
      try {
        this.axios
          .post("http://localhost:3000/api/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((result) => {
            // FIXME the "name" property here is holder the same user id the "id" is, remove it or assign the user name if needed
            // FIXME the JWT token is no longer being stored in the browser's local storage (and things like delete user will not work)
            this.$store.dispatch('login', { name: result.data.userId, id: result.data.userId });
            this.$router.push("/");
          });
      } catch (e) {
        this.error = "Invalid username/password";
      }
    },
  },
};
</script>

<style>
form {
  width: 40%;
  min-width: 350px;
  top: 25%;
  transform: translate(-50%) -50%;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 20px #000000b3;
  font-family: Monsterrat;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;
}
</style>