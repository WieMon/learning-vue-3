<template>
  <div>
    <header class='header'>
      <h3>Hello</h3>
      <nav>
        <span><router-link to='/' tag='span' active-class="active" exact >About</router-link></span>
        <span><router-link to='/menu' tag='span' active-class="active" exact >Menu</router-link></span>
        <span><router-link to='/contact' tag='span' active-class="active" exact >Contact</router-link></span>
      </nav>
    </header>
  </div>
</template>

<script>
</script>

<style>
header {
  background-color: brown;
  color: white;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  font-size: 20px;
}

h3 {
  display: inline-block;
  margin: 0;
}

nav {
  float: right;
}

nav .active {
  color:yellow;
  border-bottom: 1px solid yellow;
}

span {
  padding: 5px 20px;
  cursor: pointer;
}
</style>
