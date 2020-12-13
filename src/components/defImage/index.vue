<template>
  <div>
    <img class="image"
         :src="imgUrl" />
  </div>

</template>

<script>
const DefPath = process.env.NODE_ENV === 'production' ? imageDefUrl : ''

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgUrl() {
      let url = this.src || ''
      let idx = url.indexOf('images')
      if (idx == -1) return url
      let fileName = url.substr(idx + 7)
      if (DefPath) {
        return `${DefPath}${fileName}`
      } else {
        return require(`../../images/${fileName}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  display: block;
}
</style>