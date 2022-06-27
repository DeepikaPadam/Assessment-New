<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <h4 class="navbar-brand">TV MAZE</h4>
      <div>
        <form class="form-inline">
          <div class="row">
            <input class="form-control" type="text" v-model="show" placeholder="Enter show name" />
            <button class="btn btn-success" type="submit" @click="search(show)">Search</button>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarView',
  data() {
    return {
      show: ''  
    };
  },
  methods: {
    search(show){
      this.$router.push({name:'SearchShow', params: {name: show}}); 
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-control{
    width: auto;
  }
</style>
