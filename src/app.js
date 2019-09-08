import Vue from 'vue';

Vue.component('accordion', {
    props:['item'],
    template: `
      <div>
          <p>{{item.title}}</p>
          <p @click="toggle = ! toggle">Details</p>
          <p v-if="toggle">{{item.description}}</p>
      </div> 
    `,
    data(){
        return{
            toggle:false
        }
    }
});
  new Vue({
      el:'#app',
      data:{
          items:[
              {id:1, title:'title 1', description:'Description for tab'},
              {id:2, title:'title 2', description:'Description for tab'},
              {id:3, title:'title 3', description:'Description for tab'},
          ]
      }
      
  });