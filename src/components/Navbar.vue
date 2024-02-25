<template>
  <nav class="navbar navbar-expand-lg" :class="navbarClasses">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <NavbarLink
              :page="page"
              :isActive="activePage == index"
              @:click.prevent="navLinkClick(index)"
            ></NavbarLink>
          </li>
        </ul>

        <div class="flex-fill"></div>
        <ul class="navbar-nav">
          <form class="d-flex">
            <button
              type="button"
              class="btn btn-info"
              @:click.prevent="toggleDarkMode"
            >
              Toggle
            </button>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  props: ["pages", "activePage", "navLinkClick"],
  components: { NavbarLink },
  created() {
    this.loadThemeSetting();
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
    },
    loadThemeSetting() {
      let mode = localStorage.getItem("darkMode");
      if (mode) {
        this.darkMode = JSON.parse(mode);
      }
    },
  },
  computed: {
    navbarClasses() {
      return {
        "navbar-light": !this.darkMode,
        "bg-light": !this.darkMode,
        "navbar-dark": this.darkMode,
        "bg-dark": this.darkMode,
      };
    },
  },
  data() {
    return {
      darkMode: true,
    };
  },
  components: { NavbarLink },
};
</script>
