import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    x : '',
    bus_detail_main_flg : 0,
    cnt : 0 ,
    src : '',
    dest : '',
    is_src_flg : false,
    is_dest_flg : false ,
    src_h : -1 ,
    dest_h : -1,
    src_i : -1,
    dest_i  : -1,
    wp2_arr : [] ,
    sel_wp_h : -1 ,
    sel_wp_i : -1 ,
    sel_wp_n : '' ,
    ib_sd_f : false,
    rf : false ,
    rb : false ,
    s_in_r : -1 ,
    d_in_r : -1 ,
    obj :{
      n: '',
      h : '',
      i2 :'',
      t : ''
    },
    b_obj1 :{
      n:'',
      h:'',
      i2:'',
      t: ''
    },
    b_obj2:{
      n:'',
      h:'',
      i2:'',
      t : ''
    },
    sel_b_n : '',
    sel_b_h:'',
    sel_b_i2:''
  },
  getters : { // computed
    x: state => {
          return state.x ;
    },
    bus_detail_main_flg : state => {
          return state.bus_detail_main_flg ;
    },
    cnt : state => {
      return state.cnt ;
    },
    src : state => {
      return state.src;
    },
    dest : state => {
      return state.dest;
    },
    wp2_arr : state => {
      return state.wp2_arr;
    },
    sel_wp_h : state =>{
      return state.sel_wp_h;
    },
    sel_wp_i : state =>{
      return state.sel_wp_i;
    },
    sel_wp_n : state => {
      return state.sel_wp_n ;
    },
    ib_sd_f: state => {
      return state.ib_sd_f;
    },

  },
  mutations :{ //methods
    incCnt : state => {
      state.cnt++;
    },
    sel_src : state => {
      state.is_src_flg = true;
      state.is_dest_flg = false;
      //this.$router.push('/search_loc');
    },
    sel_dest :  state => {
      state.is_dest_flg = true;
      state.is_src_flg = false;
      //this.$router.push('/search_loc');
    },

  }
});
