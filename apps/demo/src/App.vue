<template>
  <div class="container">
    <aside class="sidebar">
      <ParameterForm :params="params" :fields="fields" @update:params="params = $event" />
      <button class="print-btn" @click="print">打印 PDF</button>
    </aside>
    <main class="preview">
      <div class="a4-paper" id="print-area">
        <tmp1 />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ParameterForm from './components/ParameterForm.vue'
import { tmp1 } from '@monorepo-starter/vue'

interface Field {
  key: string
  label: string
  type: 'string' | 'number' | 'boolean' | 'enum'
  options?: string[]
}

const template = `<div>
  <h2 v-if="showTitle">欢迎您，{{name}}</h2>
  <p>性别：{{gender}}</p>
  <p>年龄：{{age}}</p>
</div>`

const fields: Field[] = [
  { key: 'name', label: '姓名', type: 'string' },
  { key: 'gender', label: '性别', type: 'enum', options: ['男', '女'] },
  { key: 'age', label: '年龄', type: 'number' },
  { key: 'showTitle', label: '显示标题', type: 'boolean' },
]

const params = ref({
  name: '张三',
  gender: '男',
  age: 30,
  showTitle: true,
})

function print() {
  // 只打印预览区域
  const printContents = document.getElementById('print-area')?.innerHTML
  const originalContents = document.body.innerHTML
  if (printContents) {
    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = originalContents
    location.reload()
  }
}
</script>

<style>
.container {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 300px;
  padding: 24px;
  background: #f8f9fa;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.print-btn {
  margin-top: 24px;
  padding: 10px 0;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.preview {
  flex: 1;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.a4-paper {
  width: 148mm;
  height: 210mm;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  margin: 32px 0;
  padding: 32px 24px;
  box-sizing: border-box;
  position: relative;
}
</style>