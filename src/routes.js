import home from './components/home.vue'
//import search_loc from './components/search_loc.vue'
//import direct_bus from './components/direct_bus.vue'
//import indirect_bus from './components/indirect_bus.vue'
//import indirect_bus2 from './components/indirect_bus2.vue'
//import bus_detail from './components/bus_detail.vue'
//import google_map from './components/map.vue'
//import home1 from './components/home1.vue'


//lazy laoding
const search_loc = resolve => {
  require.ensure(['./components/search_loc.vue'],()=>{
      resolve(require('./components/search_loc.vue'));
  });
};

const direct_bus = resolve => {
  require.ensure(['./components/direct_bus.vue'],()=>{
      resolve(require('./components/direct_bus.vue'));
  });
};

const indirect_bus = resolve => {
  require.ensure(['./components/indirect_bus.vue'],()=>{
      resolve(require('./components/indirect_bus.vue'));
  });
};

const indirect_bus2 = resolve => {
  require.ensure(['./components/indirect_bus2.vue'],()=>{
      resolve(require('./components/indirect_bus2.vue'));
  });
};

const bus_detail = resolve => {
  require.ensure(['./components/bus_detail.vue'],()=>{
      resolve(require('./components/bus_detail.vue'));
  });
};

const google_map = resolve => {
  require.ensure(['./components/map.vue'],()=>{
      resolve(require('./components/map.vue'));
  });
};

const home1 = resolve => {
  require.ensure(['./components/home1.vue'],()=>{
      resolve(require('./components/home1.vue'));
  });
};

export const routes = [ //arr
  {path:'/' , component : home},  //obj
  {path: '/search_loc' , component: search_loc },
  {path: '/direct_bus' , component : direct_bus},
  {path: '/indirect_bus' , component:indirect_bus},
  {path: '/indirect_bus2' , component:indirect_bus2},
  {path:'/bus_detail' , component:bus_detail},
  {path:'/map' , component:google_map},
  {path:'/home1' , component:home1}

];
