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



             <div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" id="main_comp">

               <div class=" mdl-color-text--black-50">



                 <!--input class="" id="sample3" v-model="loc_srch_inp" @keyup="loc_hash" type="search" ref='search'
                  placeholder="Search Location" style="width:85%;margin-left:7%;margin-top:2%;" -->
                 <!--label class="mdl-textfield__label" for="sample3">Search</label-->
                 <h4 style="text-align:center"><i class="material-icons">place</i> Select a Waypoint</h4>
                 <hr style="width:70%;margin-left:15%;margin-top:-1%;">
  <div style="width:70%;margin-left:15%;">


  <ul class="demo-list-two mdl-list">
    <h5 style="text-align:center;margin-top:3%" >{{msg}}</h5>
    <!--router-link to="/bus_detail" id="lst" -->
      <li class="mdl-list__item mdl-list__item--two-line" v-for="wp3 in wp2_arr" @click="sel_wp(wp3)" style="cursor:pointer">
        <span class="mdl-list__item-primary-content">
          <!--i class="material-icons mdl-list__item-avatar">person</i-->
          <span>{{wp3.wp_n}}</span>
          <!--span class="mdl-list__item-sub-title">{{k1.t}}</span-->
        </span>
        <span class="mdl-list__item-secondary-content">
          <!--span class="mdl-list__item-secondary-info">Track Live</span-->
          <span class="mdl-list__item-secondary-action" ><i class="material-icons">arrow_forward</i></span>
        </span>
      </li>
    <!--/router-link-->
  </ul>





  </div>
   <div id="snackbar" >{{msg}}</div>





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
  import {mapMutations} from  'vuex'

  export default {
    data(){
      return {
        ib_f : false ,
        wp_arr : [] ,
        wp_obj :{
          wp_n: '',
          wp_h : '',
          wp_i :''
        },
        //wp2_arr : [],
        i_b_str : '',
        msg : '',
      }
    },
    methods :{
      ...mapMutations([
        'sel_src','sel_dest'
      ]),
      bckbut(){
        this.$router.go(-1);
      },
      myFunction() {
          var x = document.getElementById("snackbar")
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      },
      ib2(ib,ib3){
      if(this.$store.state.src != this.$store.state.dest){
        this.wp_arr = [];
        this.$store.state.wp2_arr = [];
        this.i_b_str = '';
        this.ib_f = false ;
        //console.log("ib2");
      //  console.log(this.$store.state.src);

      if(navigator.onLine){

        this.$http.get('ADJ_NODES/'+this.$store.state.src_h+'/'
          +this.$store.state.src_i+'.json')
          .then(response => {
            return response.json();
          })
          .then(data2=>{
            //console.log(data2);

            for(let k1 in data2){
              //console.log(data2[k1]);
              //console.log(data2[k1][0]+ " "+ data2[k1][1]);
              //ib(data2[k1],ib3);
              ib(data2[k1],ib3);
            }
          });
          }//********online ends
          else{

              var data2 = this.$store.state.x.ADJ_NODES[this.$store.state.src_h][this.$store.state.src_i] ;

              for(let k1 in data2){
                ib(data2[k1],ib3);
              }
          }//******offline ends
        }else{
          console.log("same src dest");
          this.$store.state.wp2_arr = [];
        }
      },
      ib(r,ib3){
        //console.log(r[0] +" " +r[1]);
        //console.log("indirect bus query");

if(navigator.onLine){

        this.$http.get('LOC_BUS_MATRIX/'+r[0]
            +'/'+r[1]+'/'+this.$store.state.dest_h+'/'+
            this.$store.state.dest_i+'.json')
          .then(response =>{
            return response.json();
          })
          .then(data=>{
            ///console.log(data);
            if(data[0].length == 1){
            //  console.log("no indirect_bus");
            }else{
              for(var k2 in data){
                //this.ib_f = true;
              //  console.log(data[k2][0] + " " + data[k2][1]);
              ///  this.ib3(data[k2]);
                  //console.log(r[0] + "  "+ r[1]);
                  this.wp_arr.push(r);
                  ib3(r);
              }
            }
          })
          } // online ends
          else{ //offline begins

            var data = this.$store.state.x.LOC_BUS_MATRIX[r[0]][r[1]][this.$store.state.dest_h][this.$store.state.dest_i] ;

          ///console.log(data);
          if(data[0].length == 1){
          //  console.log("no indirect_bus");
          }else{
            for(var k2 in data){
              //this.ib_f = true;
            //  console.log(data[k2][0] + " " + data[k2][1]);
            ///  this.ib3(data[k2]);
                //console.log(r[0] + "  "+ r[1]);
                this.wp_arr.push(r);
                ib3(r);
            }
          }
          } //offline ends
      },
      ib3(wp){
       //console.log("ib3"+ wp);


    if(navigator.onLine) {
        this.$http.get('ALL_LOC_INDEX/'+wp[0] +'/'+wp[1]+'.json')
          .then(response=>{
            return response.json();
          })
          .then(data3=>{
            //console.log(data3);
            //console.log("1");
            this.wp_obj = {
                wp_n : data3,
                wp_h : wp[0],
                wp_i : wp[1]
            }
            //console.log("2");
            if(this.i_b_str.indexOf("$"+this.wp_obj.wp_n+"$") == -1){
              this.i_b_str += "$"+this.wp_obj.wp_n+"$";
              this.$store.state.wp2_arr.push(this.wp_obj);
              this.ib_f = true;
            }
          })
          }//online end
          else{

            var data3 = this.$store.state.x.ALL_LOC_INDEX[wp[0]][wp[1]] ;

            //console.log(data3);
            //console.log("1");
            this.wp_obj = {
                wp_n : data3,
                wp_h : wp[0],
                wp_i : wp[1]
            }
            //console.log("2");
            if(this.i_b_str.indexOf("$"+this.wp_obj.wp_n+"$") == -1){
              this.i_b_str += "$"+this.wp_obj.wp_n+"$";
              this.$store.state.wp2_arr.push(this.wp_obj);
              this.ib_f = true;
            }
          }//offline end
      },

      sel_wp(wp4){
      //  console.log(wp4.wp_h +" " +wp4.wp_i);
        this.$router.push('/indirect_bus2');
        this.$store.state.sel_wp_h  = wp4.wp_h ;
        this.$store.state.sel_wp_i = wp4.wp_i ;
        this.$store.state.sel_wp_n = wp4.wp_n;
      },



    },
    computed:{
      ...mapGetters([
        'src','dest','wp2_arr','sel_wp_h' , 'sel_wp_i' , 'sel_wp_n'
      ]),
      flg(){
        if(this.ib_f == false){
          //  return this.msg = 'No Indirect Bus on this Route';
          this.msg = 'No Indirect Bus on this Route';
          myFunction();}
        else
            return this.msg = '';
      }
    },
    beforeMount(){
      this.ib2(this.ib,this.ib3);
    },
  }
</script>

<style>



@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp{
    /*  min-height:500px;*/
       height:84vh;
      margin-top:-42%;
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
