<template>
  <div>


  <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded" style="margin-top:-10%">
       <main class="mdl-layout__content">

       <div class="demo-back" @click="bckbut" >
         <a style="margin-top:-10%;margin-left:2%;" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="#" title="go back" role="button">
           <i class="material-icons" role="presentation" style="color:#fff">arrow_back</i>
         </a>
       </div>

         <div class="demo-blog__posts mdl-grid">

           <div class="mdl-card on-the-road-again mdl-cell mdl-cell--8-col" id="main_comp55">
            <h6 style="text-align:center;cursor:pointer"><span @click="chle_search_loc();sel_src();">{{src}}</span> - <span @click="chle_search_loc();sel_dest();">{{dest}}</span></h6>
           <hr style="width:70%;margin-left:15%;margin-top:-1%;">
<div style="width:80%;margin-left:10%">
          <h5 style="text-align:center;margin-top:3%" >{{warn}}</h5>
           <ul class="demo-list-two mdl-list" @click="nextPage" style="">
             <!--router-link to="/bus_detail" id="lst" -->
               <li class="mdl-list__item mdl-list__item--two-line" v-for="k1 in obj_arr" @click="sel_p_bus(k1)" id="route"
                style="cursor:pointer;">
                 <span class="mdl-list__item-primary-content">
                   <!--i class="material-icons mdl-list__item-avatar">person</i-->
                   <span>{{k1.n}}</span>
                   <span class="mdl-list__item-sub-title">{{k1.t}}</span>
                 </span>
                 <span class="mdl-list__item-secondary-content">
                   <span class="mdl-list__item-secondary-info">Track Live</span>
                   <span class="mdl-list__item-secondary-action" ><i class="material-icons">arrow_forward</i></span>
                 </span>
               </li>
             <!--/router-link-->
           </ul>
</div>


          <!-- Footer Content -->

        <div id="nav-ji" class="">      <router-link to="/indirect_bus"> <div class="mdl-card__supporting-text meta
           mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--brown"
          style="justify-content:center; position: absolute;
    bottom: 0;
    left: 0;">
                           <span style="color:#fff;margin-left:3%;" ><span><i class="material-icons">directions_bus</i>
                           <i class="material-icons">navigate_next</i>
                           <i class="material-icons">directions_bus</i></span ><span style="margin-top:2%">Find Indirect Buses</span></span>
                       </div>  </router-link></div>

           </div>

           <div class="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop" id="not_main">

           <div class="mdl-card__media mdl-color--white mdl-color-text--grey-600">






                    <input type="text"   @click=" rt(); sel_src();" style="width:75%;cursor:pointer;margin-top:10%;" readonly="readonly" v-model="src" placeholder="SOURCE" >


        <br>

                       <input type="text"  @click=" rt(); sel_dest();" style="width:75%;cursor:pointer;margin-top:2%;" readonly="readonly" v-model="dest" placeholder="DESTINATION" >


           </div>


              <router-link to="/indirect_bus" > <div class="mdl-card__supporting-text meta
           mdl-button  mdl-button--raised  mdl-color--brown"
          style="justify-content:center;">
                           <span style="color:#fff;margin-left:3%;" ><span><i class="material-icons">directions_bus</i>
                           <i class="material-icons">navigate_next</i>
                           <i class="material-icons">directions_bus</i></span ><span style="margin-top:2%">Find Indirect Buses</span></span>
                       </div>  </router-link>
                       <div id="snackbar" >{{warn}}</div>



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

      warn:'',
        direct_bus_arr : [],
        bus_h : -1 ,
        bus_i : -1,
        q_bus_arr : [] ,

        obj_arr : [],
        tmp : {
          h1 : '',
          i1 : ''
        }
      }
    },
    methods : {
      ...mapMutations([
        'sel_src','sel_dest','sel_p_bus'
      ]),
      bckbut(){
        this.$router.go(-1);
      },
      nextPage(){
        this.$router.push('/bus_detail');
      },
      chle_search_loc(){
          this.$router.push('/search_loc');
      },
      myFunction() {
          var x = document.getElementById("snackbar")
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      },
      sel_p_bus(k1){
       //console.log("clicking -> " );
       //console.log(k1);
       this.$store.state.sel_b_n=k1.n;
       this.$store.state.sel_b_h=k1.h;
       this.$store.state.sel_b_i2=k1.i2;
        this.$store.state.bus_detail_main_flg = 1 ;
       console.log( this.$store.state.bus_detail_main_flg +this.$store.state.sel_b_n+ " "+this.$store.state.sel_b_h +" "+this.$store.state.sel_b_i2 );

      },
      rt(){
        //console.log("dskjhdkjs");
        this.$router.push('/search_loc');
      },
      get_DirectBus(callback){
      this.$store.state.sel_wp_n = '';
      this.$store.state.sel_wp_h = '';
      this.$store.state.sel_wp_i = '';

        this.warn='';

      if(this.$store.state.src != this.$store.state.dest){
          this.q_bus_arr = [];
          /*console.log(parseInt(this.$store.state.src_h)+  " "
            + this.$store.state.src_i + " "+
            this.$store.state.dest_h  + " "+
          this.$store.state.dest_i  );*/


if(navigator.onLine){

          this.$http.get('LOC_BUS_MATRIX/'
          +parseInt(this.$store.state.src_h) + '/'
          +parseInt(this.$store.state.src_i) + '/'
          +parseInt(this.$store.state.dest_h) + '/'
          +parseInt(this.$store.state.dest_i)
          +'.json')
          .then(response => {
              return response.json();
            })
            .then(data => {
              //console.log(data);
              this.direct_bus_arr = data;
              //console.log(this.direct_bus_arr[0][0]);
              if(this.direct_bus_arr[0].length == 1){
                console.log("no direct_bus");
                this.warn = 'No Direct Bus on this Route';
                this.myFunction();
              }else{
                const resultArray = [];
                for(let i in this.direct_bus_arr){
                  //console.log(this.direct_bus_arr[i]);
                  this.bus_h  = this.direct_bus_arr[i][0];
                  this.bus_i = this.direct_bus_arr[i][1];
                  //console.log(this.bus_h+" "+this.bus_i);

                  this.tmp ={
                    h1 : this.bus_h ,
                    i1 : this.bus_i
                  }

                  //console.log(this.tmp.h1 + " " + this.tmp.i1);

                  callback(resultArray , this.tmp);
                }
                this.obj_arr = resultArray;
                  //console.log(this.q_bus_arr);
              }
            });

        }else{ //********online  end


        var data = this.$store.state.x.LOC_BUS_MATRIX[this.$store.state.src_h][this.$store.state.src_i][this.$store.state.dest_h][this.$store.state.dest_i] ;

        this.direct_bus_arr = data;
        //console.log(this.direct_bus_arr[0][0]);
        if(this.direct_bus_arr[0].length == 1){
          console.log("no direct_bus");
        }else{
          const resultArray = [];
          for(let i in this.direct_bus_arr){
            //console.log(this.direct_bus_arr[i]);
            this.bus_h  = this.direct_bus_arr[i][0];
            this.bus_i = this.direct_bus_arr[i][1];
            //console.log(this.bus_h+" "+this.bus_i);

            this.tmp ={
              h1 : this.bus_h ,
              i1 : this.bus_i
            }

            //console.log(this.tmp.h1 + " " + this.tmp.i1);

            callback(resultArray , this.tmp);
          }
          this.obj_arr = resultArray;
            //console.log(this.q_bus_arr);
        }


        } //*** ofline ends
          }else{
            console.log("src dest same");
          }
      },
      x(resultArray , tmp2){

if(navigator.onLine){

        this.$http.get('ALL_BUS_INDEX/'
        +tmp2.h1 + '/'
        +tmp2.i1
        +'.json')
        .then(response => {
          return response.json();
        })
        .then(data2 => {
        //console.log("test: " + this.bus_i);
          //console.log(data2);
          //this.q_bus_arr.push(data2);
           //this.obj.n = data2;
           this.$store.state.obj = {
              n : data2,
              h: tmp2.h1,
              i2 : tmp2.i1,
              t : ''
           }
        //   console.log( " res: "+this.obj.n+" "+this.obj.h + " "+ this.obj.i2);

        //  console.log("baad me hona chahy");
          this.bus_type( resultArray,this.$store.state.obj.n ,this.$store.state.obj.h, this.$store.state.obj.i2);
        })
      }else{ //**** online ends

        var data2 = this.$store.state.x.ALL_BUS_INDEX[tmp2.h1][tmp2.i1] ;

        this.$store.state.obj = {
           n : data2,
           h: tmp2.h1,
           i2 : tmp2.i1,
           t : ''
        }
        this.bus_type( resultArray,this.$store.state.obj.n ,this.$store.state.obj.h, this.$store.state.obj.i2);

      } // *** offline ends
      },

      bus_type(resultArray,n,t_h,t_i){

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
             this.$store.state.obj ={
               n : n,
               h: t_h,
               i2 : t_i,
               t : type[0]
            }
             console.log(this.$store.state.obj);
               resultArray.push(this.$store.state.obj);
               this.obj_arr = resultArray ;
          })

          } //**** online ends
          else{

            var type = this.$store.state.x.volvo[t_h][t_i] ;

          console.log(type);
          console.log(type[0]);
          if(type[0] == 1){
            type[0] = 'General';
          }else if(type[0] == 2){
            type[0] = 'Volvo';
          }
           this.$store.state.obj ={
             n : n,
             h: t_h,
             i2 : t_i,
             t : type[0]
          }
           console.log(this.$store.state.obj);
             resultArray.push(this.$store.state.obj);
             this.obj_arr = resultArray ;


          }//offline endds*****
      }

    },
    beforeMount(){
      this.get_DirectBus(this.x)
    },
    computed : {
      ...mapGetters([
        'src','dest','obj','bus_detail_main_flg'
      ]),
    }
  }
</script>

<style >
.inline {
display: inline-block;
border: 1px solid red;
margin:10px;
}

@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp55{
      /*min-height:500px;*/
         height:84vh;
      margin-top:-42%;
    }
    #not_main{
      display:none;
    }
    #nav-ji{

    }

}

@media screen and (min-width: 425px) { /*//more than 480*/
    body {
        /*display:none;*/

    }
    #nav-ji{
  display:none;
    }

}


@media screen and (min-width: 768px ) and (max-width:840px) {
    body {
        /*display:none;*/

    }
    #main_comp55{
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
    #nav-ji{
      display:block;
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
