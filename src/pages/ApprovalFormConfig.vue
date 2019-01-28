<template>
  <el-container>
    <el-main style="background-color: beige">
      <el-row :gutter="20">
        <el-col :span="12">
          <h1>控件</h1>
          <draggable class="container" :options="{sort: false, group:{ name:'controller',  pull:'clone', put:false }}">
            <div class="control">
              <label>单行文本输入框</label>
              <el-input placeholder="请输入内容"></el-input>
            </div>
            <div class="control">
              <label>多行文本输入框</label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
            </div>
            <div class="control">
              <label>单选框</label>
              <el-select placeholder="请选择"></el-select>
            </div>
          </draggable>
        </el-col>
        <el-col :span="12">
          <h1>表单</h1>
          <draggable class="container" :options="{group:'controller'}">
          </draggable>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import draggable from 'vuedraggable'
// https://github.com/SortableJS/Vue.Draggable
export default {
  name: 'Home',
  components: {
    draggable,
  },
  data () {
    return {
      dragList: []
    }
  }
}
</script>

<style scoped>
  .container {
    min-height: 100px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
  }
  .control {
    margin-bottom: 20px;
  }
</style>
