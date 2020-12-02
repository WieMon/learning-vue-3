<template>
<div>
  <h3>Menu</h3>
   <p>
      {{ useId }}
    </p>
  <router-link
      :to="{
        name:'contactProfile',
        params:{id:userId},
        //query: { user:1, something:'hello'},
        //hash:'#somecontent'
        }">
      Go to my profile
    </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      useId: this.$route.params.id,
      userId: ''
    }
  },
  mounted(){
        this.userId = 973472349;
    }
}
</script>

<style>
</style>
