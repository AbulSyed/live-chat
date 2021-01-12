<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="scroll">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="createdAt">{{ formatDistanceToNow(doc.createdAt.toDate()) }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composable/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { onUpdated, ref } from 'vue'

export default {
  setup(){
    const { documents, error } = getCollection('messages')

    const scroll = ref(null)

    onUpdated(() => {
      scroll.value.scrollTop = scroll.value.scrollHeight
    })

    return { documents, error, formatDistanceToNow, scroll }
  }
}
</script>

<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
  .single {
    margin: 18px 0;
  }
  .createdAt {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
</style>