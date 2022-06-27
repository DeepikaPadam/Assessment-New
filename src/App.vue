<template>
  <NavbarView/>
  <router-link to="/"></router-link>
  <router-view/>
</template>

<script>
import NavbarView from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavbarView,
  }
}
</script>