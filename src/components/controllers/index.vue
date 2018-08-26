<template>
  <el-form-item :label="label">
    <!--输入框-->
    <InputControl v-if="controlType === 'input'" :control="control"></InputControl>
    <!--选择框-->
    <SelectControl v-if="controlType === 'select'" :control="control"></SelectControl>
    <!--多选框-->
    <MultipleSelect v-if="controlType === 'multipleSelect'" :control="control"></MultipleSelect>
  </el-form-item>
</template>

<script>
import Input from './Input'
import Select from './Select'
import MultipleSelect from './MultipleSelect'
export default {
  name: 'Select',
  props: ['control'],
  data () {
    return {
    }
  },
  computed: {
    controlType () {
      return this.control.controlType
    },
    label () {
      return this.control.label
    }
  },
  components: {
    InputControl: Input,
    SelectControl: Select,
    MultipleSelect: MultipleSelect
  }
}
</script>

<style scoped>
</style>
