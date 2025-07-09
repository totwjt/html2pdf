<template>
  <div v-html="renderedHtml"></div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  template: string
  params: Record<string, any>
}>()

function renderTemplate(template: string, params: Record<string, any>) {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    return params[key] !== undefined ? params[key] : ''
  })
}

const renderedHtml = computed(() => renderTemplate(props.template, props.params))
</script>