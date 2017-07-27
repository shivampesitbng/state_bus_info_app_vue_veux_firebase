<template>
  <div>




        <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded" style="margin-top:-10%;" >
             <main class="mdl-layout__content">

             <div class="demo-back" @click="bckbut" >
               <a style="margin-top:-10%;margin-left:2%;" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="#" title="go back" role="button">
                 <i class="material-icons" role="presentation" style="color:#fff">arrow_back</i>
               </a>
             </div>
               <div class="demo-blog__posts mdl-grid">




                 <div class="mdl-card something-else  mdl-cell mdl-cell--12-col" id="main_comp3">


                 <div >
                 <!--h3 style="text-align:center;margin-top:20%" >{{nonet}}</h3-->
                 <div class="card card-4" style="map-ji"><google_map></google_map>
               </div>
</div>
               <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--brown" @click="myFunction();">
               <div >
                 <i class="material-icons"  style="color:#fff">&#xE3A0</i>
                 </div>

                   <!--home1></home1-->
               </button>
                   <div class="mdl-color-text--grey-600 mdl-card__supporting-text" style="background-color:#fff">
                   <span class="mdl-chip"  v-for= "t in time_arr" id="chi" style= "padding: 0px 20px 0px 20px;
                       margin-right:5px;margin-left:5px;margin-top:3px;">
                       <span class="mdl-chip__text" style="font-size:18px"> {{t}} </span>
                   </span>
                   </div>
                   <div class="mdl-card__supporting-text meta mdl-color-text--grey-600" style="background-color:#fff;overflow:scroll;">
                     <div class="minilogo"></div>
                     <div  id="text-off">
                       <strong>
                         <p id="txt">{{offset_str}}</p></strong>
                       <!--span>2 days ago</span-->
                     </div>
                   </div>

                      <div id="snackbar" >
                      <p><b>Green</b> - <i>Source</i> </p>
                      <p><b>Red</b> - <i>Destination</i> </p>
                      <p><b>Blue</b> - Selected <i>Waypoint</i> </p>
                      <p><b>Yellow</b> - <i>Bus Stops</i> of choosen Bus </p>
                      <p><b>Click</b> on <b>markers</b> to know <i>name </i> of <i>Bus Stops</i> </p>
                      <p><i>Map doesnot</i> have <i>Offline</i> Support</p>
                      </div>
                 </div>


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


  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';

import google_map from './map.vue'


  export default{
    data(){
      return{



      nonet:'',
        f_r : -1,
        time_arr : [] ,
        offset_str : '',
        route_str : '',
        loc_arr_print : [] ,
        markerCoordinates : [] ,
        obj_lat_lng : {
          latitude : '',
          longitude : ''
        },


        new_src : '',
        new_src_h : -1 ,
        new_src_i : -1 ,

        new_dest : '',
        new_dest_h: -1,
        new_dest_i : -1 ,

        new_wp : '',
        new_wp_h : -1 ,
        new_wp_i : -1 ,

      }
    },
    components :{
      'google_map' : google_map,

    },

    methods :{
        ...mapMutations([

        ]),
        bckbut(){
          this.$router.go(-1);
        },
        myFunction() {
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        },

        /**** main - calling function *****/
        d_or_id(src_to_dest_chck){
this.nonet = ' ';
                    console.log("wp :" + this.$store.state.sel_wp_n + " "+this.$store.state.sel_wp_h + " " + this.$store.state.sel_wp_i);

                    this.new_src =  '';
                    this.new_src_h = -1;
                    this.new_src_i = -1;

                    this.new_dest = '';
                    this.new_dest_h = -1;
                    this.new_dest_i = -1;

               if(this.$store.state.bus_detail_main_flg == 1){

                    this.new_src =  this.$store.state.src;
                    this.new_src_h = this.$store.state.src_h;
                    this.new_src_i = this.$store.state.src_i;

                    this.new_dest = this.$store.state.dest;
                    this.new_dest_h = this.$store.state.dest_h;
                    this.new_dest_i = this.$store.state.dest_i;



                }else if(this.$store.state.bus_detail_main_flg == 2){

                    this.new_src =  this.$store.state.src;
                    this.new_src_h = this.$store.state.src_h;
                    this.new_src_i = this.$store.state.src_i;

                    this.new_dest = this.$store.state.sel_wp_n;
                    this.new_dest_h = this.$store.state.sel_wp_h;
                    this.new_dest_i = this.$store.state.sel_wp_i;

                    console.log("src_Dest"+this.new_src  +  " " +this.new_dest );
                    console.log("src_Dest_h"+this.new_src_h +  " " +this.new_dest_h );
                    console.log("src_Dest_i"+this.new_src_i +  " " +this.new_dest_i);

                }else if(this.$store.state.bus_detail_main_flg == 3){

                    this.new_src =  this.$store.state.sel_wp_n;
                    this.new_src_h = this.$store.state.sel_wp_h;
                    this.new_src_i = this.$store.state.sel_wp_i;

                    this.new_dest = this.$store.state.dest;
                    this.new_dest_h = this.$store.state.dest_h;
                    this.new_dest_i = this.$store.state.dest_i;

                    console.log("srcdest"+this.new_src  +  " " +this.new_dest );

                }else if(this.$store.state.bus_detail_main_flg == 0){

                }


                src_to_dest_chck();
        },


        src_to_dest_chck(){
          this.f_r = -1;
          this.$store.state.d_in_r = -1 ;
          this.$store.state.s_in_r = -1;
          this.$store.state.rf == false;
          this.$store.state.rf == false;
          this.time_arr = [];
          this.offset_str= '';
          this.route_str = 'bus_route -> ';
          this.loc_arr_print = [] ;
            this.markerCoordinates = [];

            console.log("bus: " + this.$store.state.sel_b_h +" "+this.$store.state.sel_b_i2 );

if(navigator.onLine){
          this.$http.get('bus_route/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'.json')
            .then(response => {
              return response.json();
            })
            .then(data => {
             //console.log(data);

              for(var k in data){

                  console.log("route : "+ data[k][0]+ " " + data[k][1]);

                  console.log(this.new_src_h + " " + this.new_src_i);

                  if(data[k][0] == this.new_src_h && data[k][1] == this.new_src_i){
                      this.$store.state.s_in_r=k;
                      //console.log(data[k][0]+ " "+ data[k][1]);
                        //this.break;
                     console.log("s:" + this.$store.state.s_in_r);
                  }
                  if(data[k][0] == this.new_dest_h && data[k][1] == this.new_dest_i){
                    this.$store.state.d_in_r = k;
                  //  console.log(data[k][0]+ " "+ data[k][1]);
                        //this.break;
                    console.log("d:" + this.$store.state.d_in_r);
                  }


                //console.log(data[k][0]+ " "+ data[k][1]);

                //check forward , backward
                if((this.$store.state.s_in_r < this.$store.state.d_in_r) && this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1){
                  this.$store.state.rf = true ;
                  this.$store.state.rb = false;
                  console.log("rf" +this.$store.state.s_in_r + " "+this.$store.state.d_in_r);
                }else if((this.$store.state.s_in_r > this.$store.state.d_in_r) && this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1 ){
                  this.$store.state.rf= false;
                  this.$store.state.rb = true;
                  console.log("rb" +this.$store.state.s_in_r + " "+this.$store.state.d_in_r);
                }



                //* pr
                if(this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1){
                  //return;

                  //***time
                  if(this.$store.state.rf == true && this.$store.state.rb == false){
                    this.$http.get('time_1/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'.json')
                      .then(response => {
                        return response.json();
                      },error=> {
                          console.log(error);
                      })
                      .then(data2 =>{
                        //console.log(data2);
                        for(let k2 in data2){
                          console.log(data2[k2]); //**** html
                          this.time_arr.push(data2[k2]);
                        }
                      })
                  }else if(this.$store.state.rf == false && this.$store.state.rb == true){
                    this.$http.get('time_2/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'.json')
                      .then(response => {
                        return response.json();
                      })
                      .then(data3 =>{
                        //console.log(data3);
                        for(let k3 in data3){
                          console.log(data3[k3]); //**** html
                          this.time_arr.push(data3[k3]);
                        }
                      })
                  }

                  //***time offset
                  if(this.$store.state.rf == true && this.$store.state.rb == false){
                    this.$http.get('time_offset_1/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'/'+this.$store.state.s_in_r+'.json') //
                      .then(response => {
                        return response.json();
                      })
                        .then(data5 => {
                          console.log(data5); //****  html
                          this.offset_str = "It takes " + data5 + " HOURS to reach at your source bus stop ->  " + this.new_src + " from the above metioned time(s) ";
                        })
                    }else if(this.$store.state.rf == false && this.$store.state.rb == true){
                      this.$http.get('time_offset_2/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'/'+this.$store.state.s_in_r +'.json') //
                        .then(response => {
                          return response.json();
                        })
                          .then(data6 => {
                //          console.log("here_test ");
                            console.log(data6); //***** html
                              this.offset_str = "It takes " + data6 + " HOURS to reach at your source bus stop  "  + this.new_src  + " from the above metioned time ";
                          })
                    }
                    //callback

                    return;
                }
                //* pr ends

              }
            })

          } // *******************online end
          else{
          this.nonet = "Connect to Internet to view all the bus stops of the bus & Locate Bus Live on the Map";
          //console.log(data);


              var data = this.$store.state.x.bus_route[this.$store.state.sel_b_h][this.$store.state.sel_b_i2] ;
              console.log(data);
           for(var k in data){

               console.log("route : "+ data[k][0]+ " " + data[k][1]);

               console.log(this.new_src_h + " " + this.new_src_i);

               if(data[k][0] == this.new_src_h && data[k][1] == this.new_src_i){
                   this.$store.state.s_in_r=k;
                   //console.log(data[k][0]+ " "+ data[k][1]);
                     //this.break;
                  console.log("s:" + this.$store.state.s_in_r);
               }
               if(data[k][0] == this.new_dest_h && data[k][1] == this.new_dest_i){
                 this.$store.state.d_in_r = k;
               //  console.log(data[k][0]+ " "+ data[k][1]);
                     //this.break;
                 console.log("d:" + this.$store.state.d_in_r);
               }


             //console.log(data[k][0]+ " "+ data[k][1]);

             //check forward , backward
             if((this.$store.state.s_in_r < this.$store.state.d_in_r) && this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1){
               this.$store.state.rf = true ;
               this.$store.state.rb = false;
               console.log("rf" +this.$store.state.s_in_r + " "+this.$store.state.d_in_r);
             }else if((this.$store.state.s_in_r > this.$store.state.d_in_r) && this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1 ){
               this.$store.state.rf= false;
               this.$store.state.rb = true;
               console.log("rb" +this.$store.state.s_in_r + " "+this.$store.state.d_in_r);
             }



             //* pr
             if(this.$store.state.s_in_r!=-1 && this.$store.state.d_in_r!=-1){
               //return;

               //***time
               if(this.$store.state.rf == true && this.$store.state.rb == false){


                    var data2 = this.$store.state.x.time_1[this.$store.state.sel_b_h][this.$store.state.sel_b_i2] ;


                     //console.log(data2);
                     for(let k2 in data2){
                       console.log(data2[k2]); //**** html
                       this.time_arr.push(data2[k2]);
                     }

               }else if(this.$store.state.rf == false && this.$store.state.rb == true){


                    var data3 = this.$store.state.x.time_2[this.$store.state.sel_b_h][this.$store.state.sel_b_i2] ;

                     //console.log(data3);
                     for(let k3 in data3){
                       console.log(data3[k3]); //**** html
                       this.time_arr.push(data3[k3]);
                     }

               }

               //***time offset
               if(this.$store.state.rf == true && this.$store.state.rb == false){

                 this.$http.get('time_offset_1/'+this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'/'+this.$store.state.s_in_r+'.json') //

                    var data5 = this.$store.state.x.time_offset_1[this.$store.state.sel_b_h][this.$store.state.sel_b_i2][this.$store.state.s_in_r] ;

                       console.log(data5); //****  html
                       this.offset_str = "It takes " + data5 + " HOURS to reach at your source bus stop ->  " + this.new_src + " from the above metioned time ";

                 }else if(this.$store.state.rf == false && this.$store.state.rb == true){


                    var data6 = this.$store.state.x.time_offset_2[this.$store.state.sel_b_h][this.$store.state.sel_b_i2][this.$store.state.s_in_r] ;

             //          console.log("here_test ");
                         console.log(data6); //***** html
                           this.offset_str = "It takes " + data6 + " HOURS to reach at your source bus stop  "  + this.new_src  + " from the above metioned time ";

                 }
                 //callback

                 return;
             }
             //* pr ends

           }

          }// not online ends
        },



    },

    computed :{
        ...mapGetters([
            'g_b_n','g_b_h','g_b_i' , 'bus_detail_main_flg'
        ]),
    },
    beforeMount() {
      //this.src_to_dest_chck();
      this.d_or_id(this.src_to_dest_chck);
    }
  }



</script>
<style>
.card-4 {
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
#txt{

  font-size : 16px;
  font-family : serif ;

}
#chi{

}




@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp3{
      /*min-height:500px;*/
        height:84vh;
      margin-top:-42%;


    }

}




@media screen and (max-width: 362px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #text-off{
      /*min-height:500px;*/
      /*  height:84vh;
      margin-top:-42%;*/
      margin-top:50px;


    }

}



@media screen and (min-width: 768px ) and (max-width:840px) {
    body {
        /*display:none;*/

    }
    #main_comp3{
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
