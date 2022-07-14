<template>
  <div>
    <h2>Delete</h2>
    <hr />
    <form>
      <h3>Delete your Groupomania account!</h3>
      <button @click="deleteUser" class="btn btn-primary">
        Delete account
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "deleteUser",
  data() { },
  methods: {
    deleteUser() {
      const userId = this.$store.getters.userId;
      let response = confirm("are you sure?");
      if (response) {
        // FIXME the login view component needs to store the JWT token returned for the token here to be found
        // and after that is fixed, this next line will find a token
        const token = localStorage.getItem("token");
        const notifySuccess = () => {
          alert("successful");
          this.$router.push("/login");
        }
         this.$store.dispatch("delete", { userId, token, notifySuccess });
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

h3,
h5 {
  color: red;
}
</style>
