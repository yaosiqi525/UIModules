
<template>
  <div>
    <!-- 非动态绑定,所以用input -->
    <editor
      class="editor"
      :value="content"
      :setting="editorSetting"
      @input="(content1)=> content = content1"
    ></editor>

    <!-- <Simditor class='editor' :content='initContent' :options='options' @change='change'></Simditor> -->
  </div>
</template>

<script>
import editor from '../components/TinymceEditor/editor'

export default {
  components: {
    editor
  },

  data () {
    return {
      name: '',
      content: '',
      editorSetting: {
        placeholder: 'test',
        menubar: false,
        height: 275,
        width: 500,
        object_resizing: false,
        plugins: ['textcolor', 'colorpicker', 'lists', 'link', 'image', 'hr'],
        toolbar: 'bold italic underline strikethrough forecolor numlist bullist link myImage hr alignleft aligncenter alignright indent outdent',
        setup: function (editor) {
          editor.addButton('myImage', {
            text: false,
            icon: 'image',
            tooltip: '图片',
            onclick: function (value) {
              console.log(value)
              editor.insertContent('<img src="http://course-pic-1251001058.file.myqcloud.com/upload/WechatIMG209.jpeg" width="100%" />')
            }
          })
        },
        statusbar: false
      }
    }
  },
  watch: {
    content (val) {
      console.log(val)
    },
    name (val) {
      console.log(val)
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>

<style lang='less' scoped>
.main {

}
</style>
