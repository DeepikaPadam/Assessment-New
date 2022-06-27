<template>
  <div>
    <div class="container dashboard-container my-4">
        <div class="flex-nowrap flex-row overflow-auto row show-container" v-if="searchDetails != 0">
            <div class="col-3 card images" v-for="item in searchDetails" :key="item.id">
            <img class="card-img-top" :src="item.show.image ? item.show.image.medium :'../../assets/defaultImg.jpg'" alt="" @click="displayDetails(item.show.name)"/> 
            <h5 class="card-title">{{item.show.name}}</h5>
            </div>
        </div>
        <div v-else><p class="row h-100 justify-content-center align-items-center">No Results Found</p></div>
    </div>
    <div class="text-center">
        <button class="btn btn-primary btn-md" type="submit">
          <router-link to="/">Back</router-link>
        </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SearchShow',
        data() {
            return {
                show: '',
                searchDetails: {},
                show_API : 'http://api.tvmaze.com/',
            };
        },
        created() {
            this.show = this.$route.params.name;
            this.getShow();
        },
        methods: {
            async getShow() {
                try {
                    let response = await fetch(this.show_API + 'search/shows?q=' + this.show);
                    this.searchDetails = await response.json();
                } catch (error) {
                    console.log(error);
                }
            },
            displayDetails(name){
                this.$router.push({name:'DisplayDetails', params: {name: name}}); 
            },
        },
    }
</script>
<style scoped>
    .dashboard-container .genre-title{
        color: whitesmoke;
    }
    .dashboard-container .show-container {
        margin-top: 100px;
        /*height: 400px;*/
    }

    .dashboard-container .show-container .card {
        padding: 0;
        border: none;
    }
    .dashboard-container .images {
        margin-right: 20px;
        margin-left: 20px;
        width: 250px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .dashboard-container .images > img{
        height: 200px;
    }
    .dashboard-container .images .card-text{
        font-size: 13px;
    }
    .justify-content-center{
        background-image: linear-gradient(to bottom right, black , rgb(8 21 33));
        color: whitesmoke;
        padding: 10px;
        font-size: large;
    }
    a {
     color: #fff;
    }
</style>