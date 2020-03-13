<template>
  <div id="app">
    <div id="nav">
        <!-- to make it dynamic i use the v-bind and the i18n.locale to dynamically route to the right one -->
      <router-link :to="`/${$i18n.locale}/`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
