<template>
  <navbar 
    v-if="pages != null"
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)">
  </navbar>
  <page-viewer v-if="pages != null && activePage != 3" :page="pages[activePage]"></page-viewer>
  <ShoppingList v-else-if="pages != null && activePage == 3"></ShoppingList>
</template>

<script>
import PageViewer from "./components/PageViewer";
import Navbar from "./components/Navbar.vue";
import ShoppingList from "./components/ShoppingList.vue"

export default {
  components: {
    Navbar,
    PageViewer,
    ShoppingList
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data.pages
    },
  },
  data() {
    return {
      pageTitle: "MyPage",
      abc: "MyPage",
      activePage: 0,
      pages: null,
    };
  },
  created() {
    this.getPages();
  },
};
</script>
