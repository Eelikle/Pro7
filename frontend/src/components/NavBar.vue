<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navMain">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="../assets/icon-left-font.svg" alt="Groupomania logo" /></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/signup">Signup</router-link>
          <router-link class="nav-link" v-if="isLoggedOut" to="/login">Login</router-link>

          <router-link class="nav-link" to="/deleteUser">Delete</router-link>
          <button class="btn btn-primary" v-if="isLoggedIn" @click="logOut"> Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
     computed: {
        isLoggedIn () {
            return this.$store.getters.isLoggedIn;
        },
        isLoggedOut () {
            return !this.isLoggedIn;
        },
        userName () {
            return this.$store.getters.userName;
        }
    },
  methods: {
    logOut() {
      // localStorage.clear()
      this.$store.dispatch('logout');
      this.$router.push({ name: "aboutView" });
    }
  },
};
</script>

<style>
img {
  height: 100px;
  width: 100px;
}
.navMain {
  padding-left: 5rem;
  padding-right: 5rem;
}
</style>