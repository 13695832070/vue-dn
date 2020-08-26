<template>
  <div class="mainContainer">
    <div style="padding-top: 100px; text-align: center;">{{msg}}</div>
    <div style="width: 30%; margin: 0 auto; padding-top: 20px">
      <Images src="../images/vue.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello! Wellcome to dn vue project'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
