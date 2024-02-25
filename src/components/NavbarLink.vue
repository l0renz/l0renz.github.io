<template>
  <a
    class="nav-link"
    :class="activeClasses"
    aria-current="page"
    :href="page.link.url"
    :title="`Link goes to ${page.link.url}`"
    >{{ page.link.text }}
  </a>
</template>

<script>
export default {
  props: ["page", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<!-- by defaultCSS files are not only contained to a single file, global scope -->
<style scoped>
.emphasize {
  /* text-decoration: underline !important; */
  color:  orange  !important;
}
</style>
