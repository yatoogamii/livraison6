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
    addValueInArr: function() {
      if (this.value) {
        this.arr.push({
          id: this.valueId++,
          text: this.value
        });
        this.value = '';
      }
    }
  }
})

