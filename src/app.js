import Vue from 'vue';
import Accordion from './components/Accordion'
  new Vue({
      el:'#app',
      components:{
        Accordion,
      },
      data:{
          items:[
              {id:1, title:'title 1', description:'Description for tab'},
              {id:2, title:'title 2', description:'Description for tab'},
              {id:3, title:'title 3', description:'Description for tab'},
          ]
      }
      
  });