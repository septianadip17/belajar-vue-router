<template>
  <div>
    <h1>Home</h1>
    <router-link style="color: rgb(60, 0, 255);" to="/about">About</router-link>
    <br>
    <router-link to="/example">Example</router-link>
    <hr>
    <button @click="goToAbout()">About</button>
    <br>
    <button @click="goBack()">Back</button>
    <br>
    <button @click="goForward()">Forward</button>
    <br>
    <button @click="goToAboutReplace">About Pakai Router Replace</button>
  </div>
</template>

<script>
export default {
  goToAbout(){
    this.$router.push({
      name: "about",
    })
  },
  goBack(){
    this.$router.go(-1)
  },
  goForward(){
    this.$router.go(1)
  },
  goToAboutReplace(){
    
  }
}
</script>