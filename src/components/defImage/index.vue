<template>
  <div>
    <img class="image"
         :src="imgUrl" />
  </div>

</template>

<script>
<<<<<<< HEAD
const DefPath = process.env.NODE_ENV === 'production' ? imageDefUrl : ''
=======
const DefPath = process.env.NODE_ENV === "production" ? imageDefUrl : ''
console.log('DefPath', DefPath)
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584

export default {
  props: {
    src: {
      type: String,
<<<<<<< HEAD
      required: true,
    },
  },
  computed: {
    imgUrl() {
      let url = this.src || ''
      let idx = url.indexOf('images')
      if (idx == -1) return url
      let fileName = url.substr(idx + 7)
=======
      require: true
    }
  },
  computed: {
    imgUrl() {
      let idx = this.src.indexOf('images')
      if (idx == -1) return ''
      let fileName = this.src.substr(idx + 7)
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
      if (DefPath) {
        return `${DefPath}${fileName}`
      } else {
        return require(`../../images/${fileName}`)
      }
<<<<<<< HEAD
    },
  },
=======
      
    }
  }
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  display: block;
}
</style>