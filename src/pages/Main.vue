<template>
  <div>
    <el-button @click="goto('editor')">富文本编辑器</el-button>
    <el-button @click="goto('echarts')">图表</el-button>
    <el-button @click="goto('xlsx')">表格</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goto (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style>
</style>
