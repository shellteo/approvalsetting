<template>
  <el-select class="fixedWith" v-model="controlValue" filterable clearable :placeholder="placeholder">
    <el-option v-for="(item, index) in controlOptions" :label="item.label" :value="item.value" :key="index"></el-option>
  </el-select>
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
    controlOptions () {
      return this.control.options
    },
    placeholder () {
      return this.control.placeholder
    }
  }
}
</script>

<style scoped>
</style>
