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
      <button @click.prevent="loginPage" class="btn" method="post">Login</button>
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
            console.warn(result.data.token);
            localStorage.setItem("token", result.data.token);
            // FIXME 'getUserById' action does not exist, rename to "login"
            // FIXME 'response' does not exist, rename to 'result'
            this.$store.dispatch('getUserById', response.data.userId)
             // FIXME 'user' action does not exist, remove this dispatch call
            this.$store.dispatch("user", result.data.user);
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
label {
  font-family: Monsterrat;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 8px;
}
button {
  display: block;
  background: #1c92d2;
  padding: 14px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
}
button:hover {
  background: beige;
  transition: 0.5s;
}
.btn {
  display: block;
  background: #1c92d2;
  padding: 8px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1px;
  width: 10%;
  margin: auto;
}
</style>