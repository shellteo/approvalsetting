<template>
  <div style="padding: 20px 0 20px 20px;">
    <div class="timeLineItem">
      <div class="timeLineTail"></div>
      <div class="timeLineHead">
        <div class="node"></div>
      </div>
      <div class="timeLineContent">
        <div class="flow-record-content">
          <div class="timeDiv" style="justify-content: space-between;">
            <div>
              <span>步骤：</span>
              <span>发起</span>
            </div>
            <span class="userDiv">
              <font-awesome-icon icon="user" style="color: #cacad3"/>
            </span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="edit" style="color: #cacad3"/>
            </span>
            <span>小李发起审批单</span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="clock" style="color: #cacad3"/>
            </span>
            <span>2018年8月16日 10:56:51</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeLineItem">
      <div class="timeLineTail"></div>
      <div class="timeLineHead">
        <div class="node"></div>
      </div>
      <div class="timeLineContent">
        <div class="flow-record-content">
          <div class="timeDiv" style="justify-content: space-between;">
            <div>
              <span>步骤：</span>
              <span>发起</span>
            </div>
            <span class="userDiv">
              <font-awesome-icon icon="user" style="color: #cacad3"/>
            </span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="edit" style="color: #cacad3"/>
            </span>
            <span>小李发起审批单</span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="clock" style="color: #cacad3"/>
            </span>
            <span>2018年8月16日 10:56:51</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeLineItem">
      <div class="timeLineHead">
        <div class="node"></div>
      </div>
      <div class="timeLineContent">
        <div class="flow-record-content">
          <div class="timeDiv" style="justify-content: space-between;">
            <div>
              <span>步骤：</span>
              <span>发起</span>
            </div>
            <span class="userDiv">
              <font-awesome-icon icon="user" style="color: #cacad3"/>
            </span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="edit" style="color: #cacad3"/>
            </span>
            <span>小李发起审批单</span>
          </div>
          <div class="timeDiv">
            <span class="iconDiv">
              <font-awesome-icon icon="clock" style="color: #cacad3"/>
            </span>
            <span>2018年8月16日 10:56:51</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessChart',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .iconDiv {
    width: 20px;
  }
  .userDiv {
    padding: 2px 5px;
    border: 1px #cacad3 solid;
    border-radius: 50%;
  }
  .timeDiv {
    color: #6b737b;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
  }
  .timeLineItem {
    position: relative;
    padding: 0 0 20px;
  }
  .timeLineTail {
    position: absolute;
    left: 4px;
    top: .75em;
    height: 100%;
    border-left: 2px solid #e8e8e8;
  }
  .timeLineContent {
    font-size: 13px;
    position: relative;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 18px;
    .flow-record-content {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
    }
  }
  .timeLineHead {
    background-color: transparent;
    position: absolute;
    text-align: center;
    line-height: 1;
    margin-top: 0;
    border: 0;
    border-radius: 0;
    padding: 3px 1px;
    transform: translate(-50%,-50%);
    top: 5px;
    left: 5px;
    width: auto;
    height: auto;
    .node {
      display: inline-block;
      width: 11px;
      height: 11px;
      border: 1px solid #fff;
      box-shadow: 0 1px 2px 0 rgba(175,182,193,.5);
      border-radius: 50%;
      background-color: rgb(82, 120, 166);
    }
  }
</style>
