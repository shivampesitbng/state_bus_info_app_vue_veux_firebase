

<template >

<div id="hm">

    <!-- Simple Textfield -->








      <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
        <main class="mdl-layout__content">
           <div class="demo-blog__posts mdl-grid">
              <div class="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop" id="main_comp" style="background:#000 ">
                <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--brown"  @click="saveData();myFunction()">
                  <div >
                    <i class="material-icons" style="color:#fff">&#xE2C4;</i>

                  </div>
                </button>

              <div class="mdl-card__media mdl-color--white mdl-color-text--grey-600">






                        <input type="text"  id="inp_src" class="inner2" @click=" rt(); sel_src();" style="" readonly="readonly" v-model="src" placeholder="SOURCE" >


<br>

                           <input type="text"  id="inp_dest" @click=" rt(); sel_dest();" style="" readonly="readonly" v-model="dest" placeholder="DESTINATION" >












               </div>

               <!--button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--brown" @click="go_to_direct_bus_comp"
                  style="margin-top:5%">
                  <span style="color:#fff;"><i class="material-icons">directions_bus</i> Find Bus</span>
                  </button-->


                  <div class="wrapper">


</div>

               <div class="mdl-card__supporting-text meta button
               mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--brown" @click="go_to_direct_bus_comp"
              style="justify-content:center;" v-ripple.mouseover.300="'rgba(255, 255, 255, 0.35)'"  >
                               <span style="color:#fff;margin-left:3%;" ><i class="material-icons">directions_bus</i>
                               <span style="margin-top:2%;">Find Bus</span></span>
                           </div>
                           <div id="snackbar" >{{warn}}</div>



             </div>

               <div class="mdl-card coffee-pic mdl-cell mdl-cell--8-col"  id="sec_comp" >
                 <div class="mdl-card__media mdl-color-text--grey-50" @click="gohome1">
                   <h3>Travel</h3>
                 </div>
                 <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
                   <div class="minilogo"></div>
                   <div>
                     <strong>Places to Travel in Rajasthan</strong>
                     <!--span>2 days ago</span-->
                   </div>
                 </div>
               </div>







               <!--div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col">
                 <div class="mdl-card__media mdl-color-text--grey-50">
                   <h3><a href="#">On the road again</a></h3>
                 </div>
                 <div class="mdl-color-text--grey-600 mdl-card__supporting-text">
                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
                 </div>
                 <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
                   <div class="minilogo"></div>
                   <div>
                     <strong>The Newist</strong>
                     <span>2 days ago</span>
                   </div>
                 </div>
               </div-->



             </div>
             <footer class="mdl-mini-footer myfooterji2">
               <div class="mdl-mini-footer--left-section">
                 <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter">
                   <span class="visuallyhidden">Twitter</span>
                 </button>
                 <button class="mdl-mini-footer--social-btn social-btn social-btn__blogger">
                   <span class="visuallyhidden">Facebook</span>
                 </button>
                 <button class="mdl-mini-footer--social-btn social-btn social-btn__gplus">
                   <span class="visuallyhidden">Google Plus</span>
                 </button>
               </div>
               <div class="mdl-mini-footer--right-section">
                 <button class="mdl-mini-footer--social-btn social-btn__share">

                   <i class="material-icons" role="presentation">share</i>
                   <span class="visuallyhidden">share</span>
                 </button>
               </div>
             </footer>
           </main>
           <div class="mdl-layout__obfuscator"></div>

         </div>



</div>

</template>

<script>

  import home1 from './home1'

import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    data() {
            return {
              warn:'',
                msg2 : ''
            }
        },
        methods: {
          ...mapMutations([
            'sel_src','sel_dest'
          ]),
          gohome1(){
            this.$router.push("/home1");
          },
          saveData(){

          if(navigator.onLine){


          this.warn = 'Downloading Database... (for Offline Acess)';

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


                this.warn = 'You are Offline, Download Fail !';

            }
          },
          getSavedData() {

              console.log("retreiv");
              var y = JSON.parse(localStorage.getItem('db'));
              this.$store.state.x = y ;
              console.log(this.$store.state.x);

            //  this.warn = "Retriving Saved Data";


        },
          myFunction() {
              var x = document.getElementById("snackbar")
              x.className = "show";
              setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          },
          rt(){
            //console.log("dskjhdkjs");
            this.$router.push('/search_loc');
          },
          go_to_direct_bus_comp(){
            if(this.$store.state.src != '' && this.$store.state.dest != ''){
              if(this.$store.state.src != this.$store.state.dest){
                this.$router.push('/direct_bus');
              }else{
                console.log("src , dest same");
                this.warn = "Source & Destination can't be Same"
                this.myFunction();
              }
            }else{
              console.log("src or dest are empty");
              this.warn = "Source or Destination can't be empty"
                this.myFunction();
            }
          },
        },
        computed: {
            ...mapGetters([
                'cnt', 'src', 'dest'
            ]),
        },
        components : {
          'home1' : home1
        },
        beforeMount(){
          this.getSavedData();
        }
}

</script>
<style>
#inp_src{
width:75%;cursor:pointer;margin-top:10%;
}
#inp_dest{
width:75%;cursor:pointer;margin-top:2%;
}


@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp{
    /*  min-height:490px;*/
     height:85vh;
      margin-top:-46%;
    }
    #inp_src{
    /*  margin-top:5%;*/
    width:70%;
    }
    #inp_dest{
  margin-top:5%;
width:70%;
    }
    #sec_comp{
      margin-top:7%;
    }


}





@media screen and (min-width: 768px ) and (max-width:840px) {
    body {
        /*display:none;*/

    }
    #main_comp{
    /*  min-height:500px;*/
    height:84vh;
      margin-top:-19%;
    }
    #sample3{
    /*  margin-top:5%;*/
    width:70%;
    }
}

.ripl2 {
    position: relative;
    background-color:#795548 !important;
    border: none;
    /*font-size: 28px;*/
    color: #FFFFFF;
    padding: 20px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.ripl2:after {
    content: "";
    background: rgba(245, 245, 245, 0.48);
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.ripl2:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}



</style>
