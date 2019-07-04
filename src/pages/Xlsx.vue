<template>
  <div>
    <input type="file" ref="upload" accept=".xls, .xlsx" class="outputlist_upload">
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      outputs: []
    }
  },
  mounted () {
    this.$refs.upload.addEventListener('change', e => {
      // 绑定监听表格导入事件
      this.readExcel(e)
    })
  },
  methods: {
    readExcel (e) {
      console.log(e)
      // 表格导入
      var that = this
      const files = e.target.files
      console.log(files)
      if (files.length <= 0) {
        // 如果没有文件名
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
        return false
      }

      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, {
            type: 'binary'
          })
          const wsname = workbook.SheetNames[0] // 取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // 生成json表格内容
          console.log(ws)
          that.outputs = [] // 清空接收数据
          // 编辑数据
          for (var i = 0; i < ws.length; i++) {
            var sheetData = {
              name: ws[i].name,
              phone: ws[i].phone
            }
            that.outputs.push(sheetData)
          }
          console.log(this.outputs)
          this.$refs.upload.value = ''
        } catch (e) {
          return false
        }
      }
      fileReader.readAsBinaryString(files[0])
    }
  }
}
</script>

<style>
</style>
