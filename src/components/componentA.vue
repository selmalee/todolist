<template>
  <div class="hello">
    <p>{{ msgfromfa }}</p>
    <button v-on:click="onClickMe">like!</button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'I like you!'
    }
  },
  props: ['msgfromfa'],
  events: {
    'onAddnew': function(items){
      console.log(items)
    }
  },
  methods: {
    onClickMe: function(){
      this.$dispatch('child-say',this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
button {
  position: absolute;
  bottom: 10%;
  right: 20%;
  width: 100px;
  background-color: green;
  font-size: 16px;
  color: #fff;
  padding: 2px 5px;
  border: none;
}
.hello p {
  bottom: 5%;
  font-size: 12px;
  color: green;
}
</style>
