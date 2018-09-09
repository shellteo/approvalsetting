<template>
  <div id="myDiagramDiv">
  </div>
</template>

<script>
import go from 'gojs'
let $ = go.GraphObject.make
export default {
  name: 'diagram',
  props: ['modelData'],
  // accept model data as a parameter
  data () {
    return {}
  },
  // provide access to the GoJS Diagram
  mounted () {
    let myDiagram = $(go.Diagram, 'myDiagramDiv', {
      initialContentAlignment: go.Spot.Center, // center Diagram contents
      'undoManager.isEnabled': true // enable Ctrl-Z to undo and Ctrl-Y to redo
    })
    let myModel = $(go.Model)
    myModel.nodeDataArray = [{
      key: 'Alpha'
    }, {
      key: 'Beta'
    }, {
      key: 'Gamma'
    }]
    myDiagram.model = myModel
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
