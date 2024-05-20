<script setup lang="ts">
import { type Tag } from '@/models/tasks'

type Props = {
  tag: Tag
}

defineProps<Props>()
</script>

<template>
  <div class="badge badge-accent">{{ tag }}</div>
</template>

<style scoped></style>
