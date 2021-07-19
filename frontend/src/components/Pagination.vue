<template>  
  <div class="ui stackable pagination menu">
    <a class="paginate_button item previous" :class="{ disabled: source.current_page == 1 }" 
      @click="nextPrev($event, source.current_page-1)" href="#">
      Anterior
    </a>
    
    <a v-for="page in pages" :key="page.index" class="paginate_button item" 
      :class="{ active: source.current_page == page }" href="#" @click="navigate($event, page)">
      {{ page }}
    </a>
    
    <a class="paginate_button item next" href="#" 
      :class="{ disabled: source.current_page == source.last_page }" @click="nextPrev($event, source.current_page+1)">
      Próxima
    </a>
  </div>
</template>

<script>
  import { range } from 'lodash';
  export default {
    props: ['source'],
    
    data () {
      return {
        pages: []
      }
    },
    methods: {
      navigate (ev, page) {
        ev.preventDefault()
        this.$emit('navigate', page)
      },
      nextPrev (ev, page) {
        if(page == 0 || page == this.source.last_page+1) {
          return;
        }
        this.navigate(ev, page)
      }
    },
    watch: {
      source () {
        this.pages = range(1, this.source.last_page+1)
      }
    }
  };
</script>

<style scoped>

</style>