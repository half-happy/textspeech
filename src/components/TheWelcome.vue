<script setup>
import { ref } from 'vue'

const inputText = ref('')
const responseText = ref('')

import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

import fetchPiper1Response from '@/services/piper1Service.js'

const sendRequest = async () => {
  try {
    const response = await fetchPiper1Response(inputText)
    responseText.value = JSON.stringify(response, null, 2)
  } catch (error) {
    responseText.value = `Error: ${error.message}`
  }
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Text To Speech via Piper1 HTTP API</template>
    <div class="card text-center m-3">
      <h1>Setup Steps:</h1>
      <h2>1. Run Python Server</h2>
      <code>python3 -m piper.http_server -m en_US-lessac-medium</code>
      <h2>2. Run Ngrok</h2>
      <code>node example.js</code>
      <h2 class="card-header">3. Simple POST Request</h2>
      <div class="row">
        <div class="col s12">
          <textarea v-model="inputText" rows="4" cols="60" placeholder="Enter text to send"></textarea>
          <button @click="sendRequest">Send</button>
        </div>
      </div>
      <h3 class="card-header">Request:</h3>
      <pre>{{ inputText }}</pre>
      <h3 class="card-header">Response:</h3>
      <pre>{{ responseText }}</pre>
      <h2>4. Response WAV</h2>
      <div class="row">
        <pre>{{ responseText }}</pre>
        <audio controls>
          <source :src="responseText ? `data:audio/wav;base64,${responseText}` : ''" type="audio/wav">
        </audio>
      </div>
    </div>
  </WelcomeItem>
</template>
