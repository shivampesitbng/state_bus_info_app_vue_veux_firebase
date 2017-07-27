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



                 <div class="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop" id="not_main">


                 <div class="mdl-card__media mdl-color--white mdl-color-text--grey-600">




                 										<input type="text"   @click=" rt(); sel_src2();" style="width:75%;cursor:pointer;margin-top:10%;" readonly="readonly" v-model="src" placeholder="SOURCE" >


                                     <br>

                                     <input class="" type="text" id="" @click="wpp();"
                                       v-model="sel_wp_n" readonly="readonly" placeholder="WAYPOINT" style="width:75%;cursor:pointer;margin-top:2%;">
                                       <br>

                                                            <input type="text"  @click=" rt(); sel_dest2();" style="width:75%;cursor:pointer;margin-top:2%;" readonly="readonly" v-model="dest" placeholder="DESTINATION" >




                 </div>


                 <router-link to="/direct_bus"> <div class="mdl-card__supporting-text meta ripl
                               mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--brown"
                               style="justify-content:center;">
                                              <span style="color:#fff;margin-left:3%;" ><span>

                                              <i class="material-icons">directions_bus</i></span ><span style="margin-top:2%">Find Direct Bus</span></span>
                                          </div>  </router-link>






                 </div>


                 <div class="mdl-card on-the-road-again mdl-cell mdl-cell--4-col" id="main_comp7">
                  <div class=" mdl-color-text--black-50">
                    <h6 style="text-align:center;cursor:pointer"> <span @click="rt();sel_src2();">{{src}}</span> - <span @click="swp();">{{sel_wp_n}}</span> </h6>
                    <hr style="width:70%;margin-left:15%;margin-top:-1%;">
                    <div style="width:80%;margin-left:10%;">

                    <div>
                        <ul class="demo-list-two mdl-list" @click="nextPage">
                          <!--router-link to="/bus_detail" id="lst" -->
                            <li class="mdl-list__item mdl-list__item--two-line"  v-for="k5 in r_arr2" @click="sel_p_bus(k5)"
                              style="cursor:pointer">
                              <span class="mdl-list__item-primary-content">
                                <!--i class="material-icons mdl-list__item-avatar">person</i-->
                                <span>{{k5.n}}</span>
                                <span class="mdl-list__item-sub-title">{{k5.t}}</span>
                              </span>
                              <span class="mdl-list__item-secondary-content">
                                <span class="mdl-list__item-secondary-info">Track Live</span>
                                <span class="mdl-list__item-secondary-action" ><i class="material-icons">arrow_forward</i></span>
                              </span>
                            </li>
                          <!--/router-link-->
                        </ul>
                    </div>

                    </div>
                  </div>
                 </div>


                 <div class="mdl-card on-the-road-again mdl-cell mdl-cell--4-col" id="main_comp2">
                  <div class=" mdl-color-text--black-50">
                    <h6 style="text-align:center;cursor:pointer"><span @click="swp();">{{sel_wp_n}}</span> - <span @click="rt();sel_dest2();">{{dest}}</span></h6>
                    <hr style="width:70%;margin-left:15%;margin-top:-1%;">
                    <div style="width:80%;margin-left:10%;">

                    <div>
                        <ul class="demo-list-two mdl-list" @click="nextPage" >
                          <!--router-link to="/bus_detail" id="lst" -->
                            <li class="mdl-list__item mdl-list__item--two-line"  v-for="k6 in r_arr" @click="sel_p_bus2(k6)"
                              style="cursor:pointer">
                              <span class="mdl-list__item-primary-content">
                                <!--i class="material-icons mdl-list__item-avatar">person</i-->
                                <span>{{k6.n}}</span>
                                <span class="mdl-list__item-sub-title">{{k6.t}}</span>
                              </span>
                              <span class="mdl-list__item-secondary-content">
                                <span class="mdl-list__item-secondary-info">Track Live</span>
                                <span class="mdl-list__item-secondary-action" ><i class="material-icons">arrow_forward</i></span>
                              </span>
                            </li>
                          <!--/router-link-->
                        </ul>

                    </div>


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
  import {mapMutations}from 'vuex'

  export default{
    data(){
      return {
        r_arr : [],
        r_arr2 : [],

      }
    },
    methods:{
      ...mapMutations([
        'sel_src','sel_dest','sel_p_bus'
      ]),
      bckbut(){
        this.$router.go(-1);
      },
      wpp(){
        this.$router.push('/indirect_bus');
      },
      nextPage(){
        this.$router.push('/bus_detail');
      },
      rt(){
        //console.log("dskjhdkjs");
        this.$router.push('/search_loc');
      },
      swp(){
        this.$router.push('/indirect_bus');
      },
      sel_p_bus(k1){
         //console.log("clicking -> " );
         //console.log(k1);
         this.$store.state.sel_b_n=k1.n;
         this.$store.state.sel_b_h=k1.h;
         this.$store.state.sel_b_i2=k1.i2;
           this.$store.state.bus_detail_main_flg = 2 ;
         console.log(this.$store.state.bus_detail_main_flg + " "+ this.$store.state.sel_b_n+ " "+this.$store.state.sel_b_h +" "+this.$store.state.sel_b_i2 );
      },
      sel_p_bus2(k1){
         //console.log("clicking -> " );
         //console.log(k1);
         this.$store.state.sel_b_n=k1.n;
         this.$store.state.sel_b_h=k1.h;
         this.$store.state.sel_b_i2=k1.i2;
           this.$store.state.bus_detail_main_flg = 3 ;
         console.log(this.$store.state.bus_detail_main_flg+ " "+ this.$store.state.sel_b_n+ " "+this.$store.state.sel_b_h +" "+this.$store.state.sel_b_i2 );
      },
      sel_src2(sel_src){
        this.$store.state.ib_sd_f =true;
        sel_src();
        //this.$router.push('/indirect_bus');
      },
      sel_dest2(sel_dest){
        this.$store.state.ib_sd_f = true;
        sel_dest();
        //this.$router.push('/indirect_bus');
      },
      reset_flg(){
        this.$store.state.ib_sd_f= false ;
      },

      find_idb(x1,x2,y1,y2,id_bus2){
        //this.r_arr = [];
      //  console.log("indirect_bus");

if(navigator.onLine ){

        this.$http.get('LOC_BUS_MATRIX/'+x1 +'/'+ x2 +'/'+ y1 +'/'
          + y2 +'.json')
        .then(response => {
          return response.json();
        })
        .then(data=>{
          //console.log(data);
          for(let k1 in data){
            //console.log(data[k1]);
              id_bus2(data[k1]);
          //  this.r_arr.push(data[k1]);
          }
        })

        } // online ends
        else{

          var data = this.$store.state.x.LOC_BUS_MATRIX[x1][x2][y1][y2] ;

          //console.log(data);
          for(let k1 in data){
            //console.log(data[k1]);
              id_bus2(data[k1]);
          //  this.r_arr.push(data[k1]);
          }
        }//offline ends
      },

      find_idb2(x1,x2,y1,y2,id_bus){
        //this.r_arr2 = [];
      //  console.log("indirect_bus");

if(navigator.onLine){

        this.$http.get('LOC_BUS_MATRIX/'+x1 +'/'+ x2 +'/'+ y1 +'/'
          + y2 +'.json')
        .then(response => {
          return response.json();
        })
        .then(data=>{
          //console.log(data);

          for(let k1 in data){
          //  console.log(data[k1]);
            id_bus(data[k1]);
          //  this.r_arr2.push(data[k1]);
          }
        });
}//online ends
else{

  var data = this.$store.state.x.LOC_BUS_MATRIX[x1][x2][y1][y2] ;

//console.log(data);

for(let k1 in data){
//  console.log(data[k1]);
  id_bus(data[k1]);
//  this.r_arr2.push(data[k1]);
}
}//offline ends
      },

      id_bus(b_v){

if(navigator.onLine){

        this.$http.get('ALL_BUS_INDEX/'+b_v[0]+'/'+b_v[1]+'.json')
          .then(response => {
            return response.json();
          })
          .then(data2=>{
            //console.log(data2);

            this.$store.state.b_obj1 = {
              n : data2 ,
              h : b_v[0],
              i2 : b_v[1]
            }

          //  this.r_arr.push(this.$store.state.b_obj1);
            //console.log(this.r_arr);

            this.bus_type( this.$store.state.b_obj1.n ,this.$store.state.b_obj1.h, this.$store.state.b_obj1.i2);
          })
          }//online ends
          else{

  var data2 = this.$store.state.x.ALL_BUS_INDEX[b_v[0]][b_v[1]] ;

          //console.log(data2);

          this.$store.state.b_obj1 = {
            n : data2 ,
            h : b_v[0],
            i2 : b_v[1]
          }

        //  this.r_arr.push(this.$store.state.b_obj1);
          //console.log(this.r_arr);

          this.bus_type( this.$store.state.b_obj1.n ,this.$store.state.b_obj1.h, this.$store.state.b_obj1.i2);

          } //****offline ends
      },

      id_bus2(b_v){

if(navigator.onLine){

        this.$http.get('ALL_BUS_INDEX/'+b_v[0]+'/'+b_v[1]+'.json')
          .then(response => {
            return response.json();
          })
          .then(data2=>{
            //console.log(data2);

            this.$store.state.b_obj2 = {
              n : data2 ,
              h : b_v[0],
              i2 : b_v[1]
            }

            //this.r_arr2.push(this.$store.state.b_obj2);
            //console.log(this.r_arr2);

            this.bus_type2( this.$store.state.b_obj2.n ,this.$store.state.b_obj2.h, this.$store.state.b_obj2.i2);
          })


          } // end online
          else{

              var data2 = this.$store.state.x.ALL_BUS_INDEX[b_v[0]][b_v[1]] ;

          this.$store.state.b_obj2 = {
            n : data2 ,
            h : b_v[0],
            i2 : b_v[1]
          }

          //this.r_arr2.push(this.$store.state.b_obj2);
          //console.log(this.r_arr2);

          this.bus_type2( this.$store.state.b_obj2.n ,this.$store.state.b_obj2.h, this.$store.state.b_obj2.i2);

          } //end offline
      },

      bus_type(n, t_h, t_i){

if(navigator.onLine){

        this.$http.get('volvo/'+t_h+'/'+t_i+'.json')
          .then(response => {
            return response.json();
          })
          .then(type =>{
            console.log(type);
            console.log(type[0]);
            if(type[0] == 1){
              type[0] = 'General';
            }else if(type[0] == 2){
              type[0] = 'Volvo';
            }
             this.$store.state.b_obj1 ={
               n : n,
               h: t_h,
               i2 : t_i,
               t : type[0]
            }
             console.log(this.$store.state.b_obj1);
               //resultArray.push(this.$store.state.obj);
               //this.obj_arr = resultArray ;

              this.r_arr.push(this.$store.state.b_obj1);
          })
          }//online ends
          else{

          var type =  this.$store.state.x.volvo[t_h][t_i] ;

          console.log(type);
          console.log(type[0]);
          if(type[0] == 1){
            type[0] = 'General';
          }else if(type[0] == 2){
            type[0] = 'Volvo';
          }
           this.$store.state.b_obj1 ={
             n : n,
             h: t_h,
             i2 : t_i,
             t : type[0]
          }
           console.log(this.$store.state.b_obj1);
             //resultArray.push(this.$store.state.obj);
             //this.obj_arr = resultArray ;

            this.r_arr.push(this.$store.state.b_obj1);

          }//offline ends
      },


      bus_type2(n,t_h,t_i){

if(navigator.onLine){
        this.$http.get('volvo/'+t_h+'/'+t_i+'.json')
          .then(response => {
            return response.json();
          })
          .then(type =>{
            console.log(type);
            console.log(type[0]);
            if(type[0] == 1){
              type[0] = 'General';
            }else if(type[0] == 2){
              type[0] = 'Volvo';
            }
             this.$store.state.b_obj2 ={
               n : n,
               h: t_h,
               i2 : t_i,
               t : type[0]
            }
             console.log(this.$store.state.b_obj2);
               //resultArray.push(this.$store.state.obj);
               //this.obj_arr = resultArray ;

               this.r_arr2.push(this.$store.state.b_obj2);
          })
          }//online ends
          else{

var type = this.$store.state.x.volvo[t_h][t_i] ;

          console.log(type);
          console.log(type[0]);
          if(type[0] == 1){
            type[0] = 'General';
          }else if(type[0] == 2){
            type[0] = 'Volvo';
          }
           this.$store.state.b_obj2 ={
             n : n,
             h: t_h,
             i2 : t_i,
             t : type[0]
          }
           console.log(this.$store.state.b_obj2);
             //resultArray.push(this.$store.state.obj);
             //this.obj_arr = resultArray ;

             this.r_arr2.push(this.$store.state.b_obj2);

          } //offline ends
      },




    },
    computed : {
      ...mapGetters([
        'sel_wp_h' , 'sel_wp_i' ,'sel_wp_n','src' ,'dest' , 'ib_sd_f','b_obj2','b_obj1'
      ]),
    },
    beforeMount(){
      this.reset_flg();

      //console.log("src -> wp");
      this.find_idb(this.$store.state.src_h, this.$store.state.src_i ,
        this.$store.state.sel_wp_h, this.$store.state.sel_wp_i,this.id_bus2);

      //console.log("wp -> dest");
      this.find_idb2(this.$store.state.sel_wp_h, this.$store.state.sel_wp_i ,
          this.$store.state.dest_h, this.$store.state.dest_i,this.id_bus);
    }
  }
</script>
<style>
  #box2{
    width:100%;
  }



  @media screen and (max-width: 425px) { /*//less than 480*/
      body {
          /*display:none;*/

      }
      #main_comp7{
        /*min-height:500px;*/
          height:42vh;
        margin-top:-42%;
      }
      #main_comp2{
        /*min-height:500px;*/
          height:42vh;
      /*  margin-top:-42%;*/
      }
      #not_main{
        display:none;
      }


  }






  @media screen and (min-width: 768px ) and (max-width:840px) {
      body {
          /*display:none;*/

      }
      #main_comp7{
      /*  min-height:500px;*/
      height:84vh;
        margin-top:-19%;
      }

      #main_comp2{
      /*  min-height:500px;*/
      height:84vh;
        margin-top:-19%;
      }


      #sample3{
      /*  margin-top:5%;*/
      width:70%;
      }
      #not_main{
        display:none;
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
