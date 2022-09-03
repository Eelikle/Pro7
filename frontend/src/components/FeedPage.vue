<template>
  <div class="post-feed">
    <h2>Your timeline</h2>
    <div class="post-item" v-for="post in posts" :key="post.id">
      <!-- TODO if you want to show your post tweet modal here,
      then need to use v-if that checkes "showModal" if true, see line 73 for example here:
      https://github.com/Dillonsmart/vue-quickstart/blob/main/src/views/Home.vue#L73 -->
      <PostItem :post="post" :onclick="onClickPost" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  props: ["posts"],
  data() {
    return {
      // FIXME when this component first loads, no need to show modal until user clicks post,
      // so set this first to "false"
      showModal: true,
    };
  },
  components: {
    PostItem,
  },
  mounted() {},
  methods: {
    onClickPost(post) {
      this.showModal = true;
      this.viewTweet(post);
    },
    
    viewTweet(post) {
      const body = {
        postId: post.id, 
        userId: post.user.id // TODO: Change me
      }
      this.axios.post('http://localhost:3000/api/posts/view', body,     {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
    },
  },
};
</script>

<style scoped>
.post-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 1em;
}

.post-user-info {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5em;
}

.post-user-image {
  margin-right: 10px;
}

.user-image {
  height: 45px;
  width: 45px;
  border-radius: 100%;
}

.post-username {
  font-size: 1em;
  align-self: flex-end;
}
.post-message {
  font-size: 1.2em;
  font-weight: 400;
  margin-top: 0.5em;
  text-align: start;
}

.post-date {
  font-size: 0.8em;
  font-weight: 400;
  color: #414141;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
  
  <style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
  