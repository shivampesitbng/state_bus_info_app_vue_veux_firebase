<template>
  <div>




        <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded" style="margin-top:-10%;">

             <main class="mdl-layout__content">

             <div class="demo-back" @click="bckbut" >
               <a style="margin-top:-10%;margin-left:2%;" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="#" title="go back" role="button">
                 <i class="material-icons" role="presentation" style="color:#fff">arrow_back</i>
               </a>
             </div>

               <div class="demo-blog__posts mdl-grid">



                 <div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" id="main_comp90">

                   <div class=" mdl-color-text--grey-50">



                     <input class="" id="sample3" v-model="loc_srch_inp" @keyup="loc_hash" type="search" ref='search'
                      placeholder="Search Location" style="width:85%;margin-left:7%;margin-top:2%;" >
                     <!--label class="mdl-textfield__label" for="sample3">Search </label-->

<div style="width:70%;margin-left:15%;">
                   <ul class="demo-list-three mdl-list">
                     <li class="mdl-list__item mdl-list__item--three-line "  v-for = "(obj,index) in searched_loc_arr" @click="sel_loc(obj,index)" :class="obj.s"  style="cursor:pointer;" >
                       <span class="mdl-list__item-primary-content">
                         <span>{{ obj.n }}</span>
                         <span class="mdl-list__item-secondary-action" id="arr" ><i class="material-icons">arrow_forward</i></span>
                       </span>
                     </li>
                   </ul>
</div>



                   </div>

                 </div>

                </div>

               <footer class="mdl-mini-footer ">
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

  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    data(){
      return {
        loc_srch_inp : '',
        loc_srch_inp_up : '',
        loc_hash_v : -1 ,
        searched_loc_arr : [],

        obj: {
          n : '',
          h : '',
          i: '',
          s : '',
        }

      }
    },
    methods : {
      ...mapMutations([
        'incCnt'
      ]),
      bckbut(){
        this.$router.go(-1);
      },
      goBack(){
        this.$router.go(-1);
      },
      getData_Loc(){
      //  var g_data ;
      if(navigator.onLine){


        this.$http.get('ALL_LOC_INDEX/'+this.loc_hash_v+'.json')
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log("kuchu");
            //console.log("a" + data);
            this.searched_loc_arr = [] ;
            //g_data = data;
            //console.log("a"+ data);
            for(var k in data){
              this.obj = {
                n : data[k],
                h : this.loc_hash_v ,
                i : k ,
                s : ''
              }
              this.searched_loc_arr.push(this.obj);
            }
            this.search_modal();
            //this.searched_loc_arr = data ;

          //  console.log(this.searched_loc_arr);
          });

        }else{

          var data = this.$store.state.x.ALL_LOC_INDEX[this.loc_hash_v] ;
          console.log(data);
          console.log("not online");
        //  console.log("kuchu");
          //console.log("a" + data);
          this.searched_loc_arr = [] ;
          //g_data = data;
          //console.log("a"+ data);
          for(var k in data){
            this.obj = {
              n : data[k],
              h : this.loc_hash_v ,
              i : k ,
              s : ''
            }
            this.searched_loc_arr.push(this.obj);
          }
          this.search_modal();
          //this.searched_loc_arr = data ;

        //  console.log(this.searched_loc_arr);
        }
      },
      loc_hash(){
        //console.log(this.loc_srch_inp);
        this.loc_srch_inp_up = this.loc_srch_inp.toUpperCase();
        //console.log(this.loc_srch_inp_up);
        if(this.loc_srch_inp.length >= 3){
          //console.log("cal hash");

          this.loc_hash_v = ( (this.loc_srch_inp_up[0].charCodeAt()-65)*100 +
                        (this.loc_srch_inp_up[1].charCodeAt()-65)*10 +
                          (this.loc_srch_inp_up[2].charCodeAt()-65) )%9;

          //console.log(this.loc_hash_v );
          this.getData_Loc();

        }else{
         //console.log("-1");
         this.loc_hash_v = -1;
         //console.log(this.loc_hash_v);
        }
      },
      search_modal(){
      //  console.log("angry");
      //  console.log(this.searched_loc_arr[0]);
        for(var k7 in this.searched_loc_arr){
        //  console.log("angry2");
        //  console.log(this.searched_loc_arr[k7]);
          if(this.searched_loc_arr[k7].n.indexOf(this.loc_srch_inp.toUpperCase()) != -1){
          //  console.log("show: "+this.searched_loc_arr[k7].n + " " + this.loc_srch_inp.toUpperCase());
            this.searched_loc_arr[k7].s = 'show1' ;
          }else{
            //console.log("hide: " + this.searched_loc_arr[k7].n + " "  + this.loc_srch_inp.toUpperCase());
            this.searched_loc_arr[k7].s = 'hide1';
          }
        }
      },
      sel_loc(obj){
        //console.log("clicking on :" + i);
        if(this.$store.state.is_src_flg == true &&
              this.$store.state.is_dest_flg == false){
          this.$store.state.src = obj.n ;
          this.$store.state.src_h = obj.h;
          this.$store.state.src_i = obj.i;
        //  console.log(this.$store.state.src_h+ " "+
          //  this.$store.state.src_i);
        }else if(this.$store.state.is_src_flg == false &&
              this.$store.state.is_dest_flg == true){
          this.$store.state.dest = obj.n ;
          this.$store.state.dest_h = obj.h;
          this.$store.state.dest_i = obj.i;
          //console.log(this.$store.state.dest_h + " "+
          //  this.$store.state.dest_i);
        }
        if(this.$store.state.ib_sd_f == false){
          this.$router.go(-1);
        }else{
          this.$router.push('/indirect_bus');
        }
      }
    },
    computed : {
      ...mapGetters([
        'cnt' , 'ib_sd_f'
      ]),

    },
    mounted(){
       this.$refs.search.focus();
    }

  }
</script>

<style>
.show1 {
  //visibility :visible;
  display : block;
}
.hide1{
  //visibility:hidden;
  display : none;
}
#arr {
float:right;
}
#sample3::placeholder{
font-size:27px;
}
#sample3{
font-size:27px;
}


@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp90{
    /*  min-height:500px;*/
    height:84vh;
      margin-top:-42%;
    }
    #sample3{
    /*  margin-top:5%;*/
    width:70%;
    }
}


@media screen and (min-width: 768px ) and (max-width:840px) {
    body {
        /*display:none;*/

    }
    #main_comp90{
    /*  min-height:500px;*/
    height:84vh;
      margin-top:-19%;
    }
    #sample3{
    /*  margin-top:5%;*/
    width:70%;
    }
}


@media screen and (min-width: 1024px ){
  .myfooterji{
    position:fixed;
     left:0px;
     bottom:0px;
     height:30px;
     width:100%;
     background:#999;
  }
}

</style>
