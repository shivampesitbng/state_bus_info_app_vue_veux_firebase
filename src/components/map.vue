<template><div>

  <div class="google-map" :id="mapName"  ></div>

  </div>
</template>

<script>
var infoWindow;
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [],
      markerCoordinates2: [],
      map: null,
      bounds: null,
      markers: [],
      map_arr : [],
      obj_map : {
        latitude : '',
        longitude : '',
        h : '',
        i : '',
        n : ''
      },
      live_obj : {
        latitude : '',
        longitude : '',
        h : '',
        i : '',
        n: ''
      }
    }
},
methods : {
/*  click_map(){
      //console.log("i dont kn wht m doin");
  },*/
  map_q(c,last,addInfoWindow,cnt,markerCoordinates2){
    this.$http.get('loc_lat_lng/'+c[0]+'/'+c[1]+'.json')
    .then(response =>{
        return response.json();
    })
    .then(cor => {
      console.log(cor);
      //this.map_arr.push(cor);
      this.obj_map = {
        longitude : cor[1],
        latitude : cor[0],
        h : c[0],
        i : c[1]
      }
      this.markerCoordinates.push(this.obj_map);

      last(addInfoWindow,cor,cnt,markerCoordinates2);
      console.log(this.markerCoordinates);
    })
},
//INFOWINDOW
addInfoWindow(marker, markers , coord) {
            // preparing infowindow
            var disp = '' ;
            this.$http.get('ALL_LOC_INDEX/'+coord.h + '/' + coord.i +'.json')
            .then(response => {
              return response.json();
            })
            .then(ln => {
              console.log(ln);
              disp = ln ;
            })




              console.log(marker.id );
            // adding listener, so infowindow is opened
            google.maps.event.addListener(marker, "click", function() {
                if (infoWindow)
                    infoWindow.close();
                infoWindow = new google.maps.InfoWindow({
                    content: ' ' + disp
                });
                infoWindow.open(this.map, marker);
            });
        },
//job
last(addInfoWindow,cor,cnt ,markerCoordinates2){





  this.bounds = new google.maps.LatLngBounds();
  const element = document.getElementById(this.mapName);
  const mapCentre = this.markerCoordinates[0];
  const options = {
    center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
    disableDefaultUI : true,
    zoomControl:true,
  }
  this.map = new google.maps.Map(element, options);




//live
  markerCoordinates2.forEach((coord2) => {
    const position = new google.maps.LatLng(coord2.latitude, coord2.longitude);
    console.log("coor test ===> " + coord2.latitude+" "+ coord2.longitude);
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'; //icon

    var marker = new google.maps.Marker({
        position,
        map: this.map,
        icon:{url:'/static/img/icons/bus.png'},
      // icon: iconBase + 'library_maps.png' ,// icon,
         id: cnt
      });

    this.markers.push(marker);
    this.map.fitBounds(this.bounds.extend(position));
  });
//live ends







  //for each in arr
  this.markerCoordinates.forEach((coord) => {
  //console.log("cor" + this.markerCoordinates);
    const position = new google.maps.LatLng(coord.latitude, coord.longitude);
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'; //icon

    var marker ;
    if(this.$store.state.src_h == coord.h  &&  this.$store.state.src_i == coord.i ){
      marker = new google.maps.Marker({
        position,
        map: this.map,
          icon:{url:'/static/img/icons/source.png'},
      //  icon: iconBase + 'library_maps.png' ,// icon,
         id: cnt
      });
    }else if(this.$store.state.dest_h == coord.h  &&  this.$store.state.dest_i == coord.i ){
      marker = new google.maps.Marker({
       position,
       map: this.map,
         icon:{url:'/static/img/icons/destination.png'},
       //icon: iconBase + 'library_maps.png' ,// icon,
       id: cnt
      });
    }else if(this.$store.state.sel_wp_h  == coord.h  &&  this.$store.state.sel_wp_i == coord.i ){
    marker = new google.maps.Marker({
       position,
       map: this.map,
         icon:{url:'/static/img/icons/wp.png'},
  //     icon: iconBase + 'library_maps.png' ,// icon,
       id: cnt
      });
    }else {
       marker = new google.maps.Marker({
        position,
        map: this.map,
          icon:{url:'/static/img/icons/else.png'},
      //  icon: iconBase + 'parking_lot_maps.png' ,// icon,
        id: cnt
       });
    }



    this.markers.push(marker);
    this.map.fitBounds(this.bounds.extend(position));
    marker.addListener('click', function() {  //click
        console.log("clicking at "+ coord.latitude + "  " + coord.latitude +  " " + coord.h + " " + coord.i);
        addInfoWindow(marker,this.markers ,coord);
    });
    console.log("wo first");
  });
  //for each ends







} ,

q_route(map_q,last,addInfoWindow){
    this.map_arr = [];
    var cnt = 0;
    this.$http.get('bus_route/'+ this.$store.state.sel_b_h +'/' +this.$store.state.sel_b_i2 +'.json')
    .then(response => {
        return response.json();
    })
    .then(qr => {
      console.log(qr);


      //live
      this.$http.get('live/'+ this.$store.state.sel_b_h+'/'+this.$store.state.sel_b_i2+'.json')
      .then(response=>{
        return response.json();
      })
      .then(live=>{
        console.log("live: "+live[0]+ " "+ live[1]);
        this.live_obj = {
          longitude : live[1],
          latitude : live[0],
          h : this.$store.state.sel_b_h ,
          i : this.$store.state.sel_b_i2,
          n : this.$store.state.sel_b_n
        }
        this.markerCoordinates2.push(this.live_obj);
        console.log("pehle kon");
      })
      //live





      for(let r in qr){
      cnt++ ;
        //  console.log(qr[r]);
        map_q(qr[r],last,addInfoWindow,cnt, this.markerCoordinates2);
      }
      console.log("map_Arr"+this.map_arr);
    })
},
//live(){

//}
},
beforeMount(){
    this.q_route(this.map_q,this.last,this.addInfoWindow);
  //  this.live(this.last);
},
};
</script>
<style scoped>
.google-map {
/*  width: 800px;*/
  /*min-height: 300px;*/
  height:400px;

  /*margin: 0 auto;
  background: gray;*/
}




</style>
