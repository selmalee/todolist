<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        ❤ {{item.label}}
        <span v-on:click="deleteThis(item)">delete</span>
        <hr/>
      </li>
    </ul>
        
    <p>Do you like me? {{childWords}}</p>
    <component-a msgfromfa="(Just Say U Love Me)"></component-a>
  </div>
</template>

<script>
import Store from './store'
import componentA from './components/componentA'
//相当于module.export
export default {
  /*function data(){
    return...
  }*/
  /*相当于var vue = new vue({data: function(){}})*/
  data () {
    return {
      title: 'TODO LIST',
      items: Store.fetch() || [],
      newItem: '',
      childWords: ''
    }
  },
  components: {
    componentA
  },
  watch: {
    items: {
      handler: function(items){
        Store.save(items)
      },
      deep: true
    }
  },
  events: {
    'child-say' : function(msg){
      this.childWords = msg
    }
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished
    },
    addNew: function() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
      this.$broadcast('onAddnew', this.items)
    },
    listenToMyBoy: function (msg){
      this.childWords = msg
    },
    deleteThis: function(item) {
      this.items.splice(this.items.indexOf(item), 1)
      Store.save(this.items)
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width: 60%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
#app h1:nth-child(1) {
  line-height: 3;
  position: absolute;
  top: 10%;
}
#app input {
  width: 60%;
  line-height: 24px;
  font-size: 24px;
  position: absolute;
  top: 25%; left: 20%;
}

ul {
  position: absolute;
  top: 35%;
  text-align: left;
  width: 60%;
  height: 45%;
  overflow: auto;
}

ul li {
  list-style: none;
  line-height: 2;
  font-size: 24px;
}
span {
  font-size: 16px;
  color: #fff;
  padding: 2px 5px;
  text-align: right;
  background-color: red;
  border-radius: 5px;
}
.logo {
  width: 100px;
  height: 100px
}
.finished {
  color: #ccc;
}
hr {
  ;border-top:1px dashed #ccc;
}
p {
  text-align: left;
  position: absolute;
  bottom: 10%;
}
</style>
