<template>
  <form class="form" @submit.prevent>
    <div v-for="field in fields" :key="field.key" class="form-item">
      <label :for="field.key">{{ field.label }}</label>
      <template v-if="field.type === 'string'">
        <input :id="field.key" type="text" v-model="localParams[field.key]" />
      </template>
      <template v-else-if="field.type === 'number'">
        <input :id="field.key" type="number" v-model.number="localParams[field.key]" />
      </template>
      <template v-else-if="field.type === 'boolean'">
        <input :id="field.key" type="checkbox" v-model="localParams[field.key]" />
      </template>
      <template v-else-if="field.type === 'enum'">
        <select :id="field.key" v-model="localParams[field.key]">
          <option v-for="option in field.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </template>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, watch, reactive, toRefs, defineEmits } from 'vue'

interface Field {
  key: string
  label: string
  type: 'string' | 'number' | 'boolean' | 'enum'
  options?: string[]
}

const props = defineProps<{
  params: Record<string, any>
  fields: Field[]
}>()
const emit = defineEmits(['update:params'])

const localParams = reactive({ ...props.params })

watch(
  () => props.params,
  (newVal) => {
    Object.assign(localParams, newVal)
  }
)

watch(
  localParams,
  (val) => {
    emit('update:params', { ...val })
  },
  { deep: true }
)
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>