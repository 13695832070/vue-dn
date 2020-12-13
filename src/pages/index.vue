<template>
  <div class="mainContainer">
    <div style="padding-top: 100px; text-align: center;">{{msg}}</div>
    <div style="width: 30%; margin: 0 auto; padding-top: 20px">
<<<<<<< HEAD
      <img src="../images/vue.jpeg" />
    </div>
    <div v-for="(item, index) of images"
         :key="index">
      <div>{{item.name}}</div>
      <div style="width: 50px; background: #000">
        <img :src="item.url" />
      </div>
=======
      <Images src="../images/vue.jpeg" />
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD

export default {
  data() {
    return {
      msg: 'hello! Wellcome to dn vue project',
      images: [
        { name: 12, url: '../images/vue.jpeg' },
      ],
    }
  },
=======
export default {
  data() {
    return {
      msg: 'hello! Wellcome to dn vue project'
    }
  }
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
}
</script>

<style lang="scss" scoped>
</style>
