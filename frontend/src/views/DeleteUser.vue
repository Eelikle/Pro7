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
  data() {},
  methods: {
    deleteUser() {
      const userId = this.$store.getters.userId;
      let response = confirm("are you sure?");
      if (response) {
        //FIXME change get token from new location, "authenticatedUser"
        // then parse JSON string into javascript object (JSON.parse)
        //then get token from js object
        const token = JSON.parse(
          localStorage.getItem("authenticatedUser")
        ).token;
        const notifySuccess = () => {
          alert("successful");
          this.$router.push("/login");
        };
        this.$store.dispatch("delete", { userId, token, notifySuccess });
      }
    },
  },
};
</script>
<style scoped>
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
