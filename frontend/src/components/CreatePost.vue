<template>
  <div>
    <div class="createPostCol">
      <textarea
        class="create-post-textarea"
        type="text"
        placeholder="What is in your mind?"
        v-model="post"
      />
      <div class="create-post-btns">
        <!-- Upload button -->
        <input type="file" id="myFile" name="filename" ref="file" v-on:change="onChangeFileUpload()"/>

        <button class="btn btn-outline-default waves-effect">
          <i class="fa fa-file"></i>
        </button>

        <button class="btn btn-primary" id="tweet-button" @click="postTweet">Tweet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
  data() {
    return {
      post: "",
      file: null
    };
  },
  methods: {
    postTweet() {
      let newPost = { user: this.userInfo.username, post: this.post, file: this.file };
      this.$emit("postTweet", newPost);
      // Clear post message
      this.post = "";
      // Clear file
      document.getElementById("myFile").value = "";
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style>
.create-post-textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  margin-bottom: 0.5em;
}

.create-post-btns {
  display: block;
  justify-content: space-between;
  margin-right:100px;
}
#tweet-button{
  display: inline;
  margin-left: 190px;
 
}
</style>