Vue.component('list', {
  props: ['text'],
  template: `<li>{{text}}
              <button @click="$emit('remove')"> Delete </button>
             </li> 
            `
})

new Vue ({
  el: '.todo-list',
  data: {
    value: '',
    arr: [],
    valueId: 1
  },
  methods: {
    capitalize: function(value) {
      return _.capitalize(value);
    },
    addValueInArr: function() {
      if (this.value) {
        
        this.arr.push({
          id: this.valueId++,
          text: this.capitalize(this.value)
        });
        this.value = '';
      }
    }
  }
})

