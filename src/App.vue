<template>
  <div id="app">
 <transition name="fade" mode="out-in" v-on:after-enter="" appear>
  <router-view></router-view>
</transition>

  </div>
</template>


<script>


  export default {
    name: 'app',
    data () {
      return {


        }

      },
      methods : {/*
        saveData(){

        if(navigator.onLine){
          this.$http.get('.json')
          .then(response => {
            return response.json();
          })
          .then(cah => {
              console.log(cah);
              console.log("saving");
              localStorage.setItem('db', JSON.stringify(cah)); //save

              this.getSavedData();

          })
         }else{
            //console.log("you are offline");
              this.getSavedData();
          }
        },

        getSavedData() {

            console.log("retreiv");
            var y = JSON.parse(localStorage.getItem('db'));
            this.$store.state.x = y ;
            console.log(this.$store.state.x);

      },*/
      },
      mounted(){
        //this.saveData();
      //  this.getSavedData();
      },


    }

</script>


<style src="./styles.css">

</style>
