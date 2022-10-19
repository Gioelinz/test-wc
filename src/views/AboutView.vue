<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
      <h5>Counter</h5>
      <p>{{ counter }}</p>
      <button class="btn btn-success" @click="addCounter">Add</button>
      <button class="btn btn-danger" @click="removeCounter">Remove</button>
      <hr />
      <div class="row justify-content-center">
        <div class="col-6">
          <h5>Write Text</h5>
          <div class="input-group mb-3">
            <input
              class="form-control"
              type="text"
              v-model.trim="word"
              @keyup.enter="pushWord(), (word = '')"
            />
            <button
              :disabled="!word"
              @click="pushWord(), (word = '')"
              class="btn btn-success"
            >
              Send
            </button>
          </div>
          <p>{{ words }}</p>
          <p v-for="word in words" :key="word">
            {{ word }}
            <button @click="removeWord(word)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      counter: 0,
      words: [],
      word: "",
    };
  },

  methods: {
    addCounter() {
      this.counter++;
    },

    removeCounter() {
      this.counter == 0 ? "" : this.counter--;
    },

    pushWord() {
      if (this.word) {
        this.words.push(this.word);
      }
    },

    removeWord(word) {
      const index = this.words.indexOf(word);
      if (index > -1) {
        this.words.splice(index, 1);
      }
    },
  },
};
</script>