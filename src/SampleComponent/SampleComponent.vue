<script>
export default {
  setup(props) {
    const { title, texte, button } = toRefs(props);
  },
};
</script>

<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    <p>{{ texte }}</p>

    <button>{{ button }}</button>
  </div>
</template>

<style lang="scss" scoped>
.my-component {
  h1 {
    color: red;
  }

  p {
    color: blue;
  }

  button {
    margin-top: 20px;
    width: 30px;
    height: 10px;
  }
}
</style>
