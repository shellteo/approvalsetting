<template>
  <el-container>
    <el-main style="background: #fff;padding: 0;">
      <base-flow-editor/>
    </el-main>
  </el-container>
</template>

<script>
import BaseFlowEditor from '../components/flowChart/base-flow-editor';
export default {
  name: 'Home',
  components: {
    BaseFlowEditor
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
