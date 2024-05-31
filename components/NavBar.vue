<template>
  <nav class="bg-white dark:bg-gray-800 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <button
              @click="toggleMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  :class="{ hidden: isMenuOpen, 'inline-flex': !isMenuOpen }"
                  class="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                <path
                  :class="{ hidden: !isMenuOpen, 'inline-flex': isMenuOpen }"
                  class="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-lg font-bold">Brand</NuxtLink>
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NuxtLink
              to="/"
              class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >About</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
nav {
  transition: background-color 0.3s;
}
</style>
