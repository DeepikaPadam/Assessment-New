<template>   
    <div class="container my-4 single-show">
        <div class="card">
        <div class="card-body row" v-if="details!=undefined">
            <div class="col-sm-6">
                <h3>{{details.name}}</h3>
                <div v-if="details.rating">
                <p>Rating: {{details.rating.average}}</p>
                </div>
                <div v-if="details.runtime">
                <p >Runtime: {{details.runtime}} Minutes</p>
                </div>
                <div v-if="details.premiered">
                <p >Premiered: {{details.premiered}}</p>
                </div>
                <div v-if="details.status">
                <p>Status: {{details.status}}</p>
                </div>
                <div v-if="details.summary">
                <p v-html="details.summary"></p>
                </div>
                <div>
                <table class="table table-borderless">
                    <tbody>
                    <tr v-if="details.language">
                    <td class="font-weight-bold">Language</td>
                    <td>{{details.language}}</td>
                    </tr>
                    <tr v-if="details.genres && details.genres.length>0">
                    <td class="font-weight-bold">Genres</td>
                    <td>{{details.genres.join(',')}}</td>
                    </tr>
                    <tr v-if="details.network">
                    <td class="font-weight-bold">Network</td>
                    <td>{{details.network.name}}</td>
                    </tr>
                    <tr v-if="details.network">
                    <td class="font-weight-bold">Country</td>
                    <td>{{details.network.country.name}}</td>
                    </tr>
                    </tbody>
                </table>
                </div>

            </div>
            <div class="col-sm-6 show-image">
                <img class="" v-bind:src="details.image ? details.image.original :'../../assets/defaultImg.jpg'" alt=""/> 
            </div>
          </div>
          <div v-else>
            <p class="row h-100 justify-content-center align-items-center">No Results Found</p>
          </div>
        </div>
    </div>
    <div class="text-center">
        <button class="btn btn-primary btn-md" type="submit">
          <router-link to="/">Back</router-link>
        </button>
    </div>
</template>

<script>

export default {
  name: 'DisplayDetails',
  data() {
    return {
      showName: '',
      details: {},
      show_API : 'http://api.tvmaze.com/',
    };
  },
  created() {
    this.showName = this.$route.params.name;
    this.getDetails();
  },
  methods: {
    async getDetails() {
        try {
            let response = await fetch(this.show_API + 'singlesearch/shows?q=' + this.showName);
            this.details = await response.json();
        } catch (error) {
            console.log(error);
        }
    }
  },
}
</script>
<style scoped>
  .single-show {
    color: whitesmoke;
  }

  .single-show .card {
    width: 100%;
    background-image: linear-gradient(to bottom right, black , rgb(87, 101, 75));
  }

  .single-show .show-image > img{
    width: 100%;
    height: 460px;
  }

  .single-show table {
    width: 85%;
    color: whitesmoke;
    font-size: 14px;
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