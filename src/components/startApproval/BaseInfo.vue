<template>
  <div>
    <el-form :inline="true" label-width="100px">
      <Control v-for="(item, index) in baseInfo" :control="item" :key="index"></Control>
    </el-form>
  </div>
</template>

<script>
import Control from '@/components/controllers'
export default {
  name: 'BaseInfo',
  components: {
    Control
  },
  data () {
    return {
      baseInfo: [
        {
          label: '报销人公司',
          placeholder: '请选择报销人公司',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '报销人部门',
          placeholder: '请选择报销人部门',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '报销人组别',
          placeholder: '请输入报销人组别',
          defaultValue: '',
          controlValue: '',
          controlType: 'input',
          controlId: '',
          rules: []
        },
        {
          label: '报销人姓名',
          placeholder: '请输入报销人姓名',
          defaultValue: '',
          controlValue: '',
          controlType: 'input',
          controlId: '',
          rules: []
        },
        {
          label: '费用所属单位',
          placeholder: '请选择费用所属单位',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '费用所属部门',
          placeholder: '请选择费用所属部门',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '收款银行',
          placeholder: '请选择收款银行',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '收款支行',
          placeholder: '请选择收款支行',
          defaultValue: '',
          controlValue: '',
          controlType: 'select',
          options: [{label: 'aa', value: 'aa'}],
          controlId: '',
          rules: []
        },
        {
          label: '收款开户名',
          placeholder: '请选择收款开户名',
          defaultValue: '',
          controlValue: '',
          controlType: 'input',
          controlId: '',
          rules: []
        },
        {
          label: '收款账号',
          placeholder: '请选择收款账号',
          defaultValue: '',
          controlValue: '',
          controlType: 'input',
          controlId: '',
          rules: []
        }
      ]
    }
  }
}
</script>

<style scoped>
  .fixedWith {
    min-width: 220px;
  }
</style>
