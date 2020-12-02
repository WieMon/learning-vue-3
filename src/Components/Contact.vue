<template>
  <div>
    <h3>
      Contact
    </h3>
      <router-view/>
    <p>
      {{ useId }}
    </p>
    <button @click='goToNotes'>
      To to notes
    </button>
    <button @click='goBackAbout'>
      Go back to About
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useId: this.$route.params.id
    }
  },
  methods: {
    goBackAbout() {
      this.$router.push('/')
    },
    goToNotes() {
      this.$router.push('/contact/show')
    }
  },
  created() {
    console.log('route: ', this.$route)
  }
}
</script>

<style>

</style>
