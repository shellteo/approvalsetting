<template>
  <el-container>
    <el-main style="background-color: beige">
      <diagram2 style="border: solid 1px black; width:100%; height:300px"></diagram2>
      <div id="sample">
        <diagram ref="diag"
                 v-bind:model-data="diagramData"
                 v-on:model-changed="modelChanged"
                 v-on:changed-selection="changedSelection"
                 style="border: solid 1px black; width:100%; height:400px"></diagram>
        <button v-on:click="addNode">Add Child to Gamma</button>
        <button v-on:click="modifyStuff">Modify view model data without undo</button>
        <br/>Current Node:
        <input v-model.lazy="currentNodeText" v-bind:disabled="currentNode === null"/>
        <br/>The saved GoJS Model:
        <textarea style="width:100%;height:250px" v-model="savedModelText"></textarea>
      </div>
    </el-main>
    <el-footer style="background-color: blanchedalmond">Footer</el-footer>
  </el-container>
</template>

<script>
import go from 'gojs'
import diagram from '@/components/settingCenter/diagram'
import diagram2 from '@/components/settingCenter/diagram2'

export default {
  name: 'ApprovalSetting',
  components: {
    diagram,
    diagram2
  },
  data () {
    return {
      diagramData: {
        nodeDataArray: [
          { key: 1, text: 'Alpha', color: 'lightblue' },
          { key: 2, text: 'Beta', color: 'orange' },
          { key: 3, text: 'Gamma', color: 'lightgreen' },
          { key: 4, text: 'Delta', color: 'pink' }
        ],
        linkDataArray: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 3, to: 4 }
        ]
      },
      currentNode: null,
      savedModelText: '',
      counter: 1,
      counter2: 4
    }
  },
  computed: {
    currentNodeText: {
      get () {
        let node = this.currentNode
        if (node instanceof go.Node) {
          return node.data.text
        } else {
          return ''
        }
      },
      set (val) {
        let node = this.currentNode
        if (node instanceof go.Node) {
          let model = this.model()
          model.startTransaction()
          model.setDataProperty(node.data, 'text', val)
          model.commitTransaction('edited text')
        }
      }
    }
  },
  methods: {
    // get access to the GoJS Model of the GoJS Diagram
    model () {
      return this.$refs.diag.model()
    },
    // tell the GoJS Diagram to update based on the arbitrarily modified model data
    updateDiagramFromData () {
      this.$refs.diag.updateDiagramFromData()
    },
    // this event listener is declared on the <diagram>
    modelChanged (e) {
      if (e.isTransactionFinished) {
        // show the model data in the page's TextArea
        this.savedModelText = e.model.toJson()
      }
    },
    changedSelection (e) {
      let node = e.diagram.selection.first()
      if (node instanceof go.Node) {
        this.currentNode = node
        this.currentNodeText = node.data.text
      } else {
        this.currentNode = null
        this.currentNodeText = ''
      }
    },
    // Here we modify the GoJS Diagram's Model using its methods,
    // which can be much more efficient than modifying some memory and asking
    // the GoJS Diagram to find differences and update accordingly.
    // Undo and Redo will work as expected.
    addNode () {
      let model = this.model()
      model.startTransaction()
      model.setDataProperty(model.findNodeDataForKey(4), 'color', 'purple')
      let data = { text: 'NEW ' + this.counter++, color: 'yellow' }
      model.addNodeData(data)
      model.addLinkData({ from: 3, to: model.getKeyForNodeData(data) })
      model.commitTransaction('added Node and Link')
      // also manipulate the Diagram by changing its Diagram.selection collection
      let diagram = this.$refs.diag.diagram
      diagram.select(diagram.findNodeForData(data))
    },
    // Here we modify VUE's view model directly, and
    // then ask the GoJS Diagram to update everything from the data.
    // This is less efficient than calling the appropriate GoJS Model methods.
    // NOTE: Undo will not be able to restore all of the state properly!!
    modifyStuff () {
      let data = this.diagramData
      data.nodeDataArray[0].color = 'red'
      // Note here that because we do not have the GoJS Model,
      // we cannot find out what values would be unique keys, for reference by the link data.
      data.nodeDataArray.push({ key: ++this.counter2, text: this.counter2.toString(), color: 'orange' })
      data.linkDataArray.push({ from: 2, to: this.counter2 })
      this.updateDiagramFromData()
    }
  }
}
</script>

<style scoped>

</style>
