<template>
    <div>
        <div class="container dashboard-container my-3">
          <h3>Popular Shows</h3>
          <div class="flex-nowrap flex-row overflow-auto row show-container">
            <div class="col-3 card images" v-for="item in showsList" :key="item.id">
              <img class="img-fluid" v-bind:src="item.image ? item.image.medium :'../../assets/defaultImg.jpg'" alt="" @click="displayDetails(item.name)"/> 
              <div class="card-text">
                <span>{{item.name}} </span> 
                <span><span>&#124; </span>{{item.rating.average}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="container dashboard-container my-3" v-for="item in totalShowsList" :key="item.id">
          <h3>{{item.genre}}</h3>
          <div class="flex-nowrap flex-row overflow-auto row show-container">
            <div class="col-3 card images" v-for="obj in item.details" :key="obj.id">
              <img class="img-fluid" v-bind:src="obj.image.medium" alt="" @click="displayDetails(obj.name)"/>
              <div class="card-text">
                <span>{{obj.name}}  </span> 
                <span><span>&#124; </span>{{obj.rating.average}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'DashboardView',
  props: {
  },
  data() {
    return {
      showsList: [],
      totalShowsList: [],
      show_API : 'http://api.tvmaze.com/',
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(this.show_API + 'shows');
        this.showsList = await response.json();
        this.showsList.sort((a, b) => (b.rating.average > a.rating.average) ? 1 : -1);  
        this.generateShowsList();
      } catch (error) {
        console.log(error);
      }
    },
    generateShowsList() {
      const totalGenres = this.getAllGenres();
      totalGenres.forEach( genre => {
        this.totalShowsList.push({genre});
      });
      this.totalShowsList.forEach(item => {
        const data = [];
        this.showsList.forEach( obj => {
        obj.genres.forEach( genre => {
            if (genre === item.genre) {
              data.push(obj);
            }
            const details = 'details';
            item[details] = data;
        });
        });
      });
    },
    getAllGenres() {
      let genresList = []
      this.showsList.forEach(array => {
        genresList = [...genresList, ...array.genres]
      });
      return [...new Set([...genresList])]
    },
    displayDetails(name){
      this.$router.push({name:'DisplayDetails', params: {name: name}}); 
    },
  },
  created() {
    this.getData();
  },
}
</script>

  <style scoped>
    .dashboard-container .genre-title{
      color: whitesmoke;
    }

    .dashboard-container .show-container {
      margin-top: 10px;
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
      cursor: pointer;
    }

    .dashboard-container .images .card-text{
      font-size: 13px;
    }
  </style>
