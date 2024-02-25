<template>
  <div class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>This is content: {{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['page'],
};
</script>
