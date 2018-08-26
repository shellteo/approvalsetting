<template>
  <el-input class="fixedWith" v-model="controlValue" clearable :placeholder="placeholder"></el-input>
</template>

<script>
export default {
  name: 'Select',
  props: ['control'],
  data () {
    return {
    }
  },
  computed: {
    controlValue: {
      get () {
        return this.control.controlValue
      },
      set (val) {
        this.control.controlValue = val
      }
    },
    placeholder () {
      return this.control.placeholder
    }
  }
}
</script>

<style scoped>
</style>
