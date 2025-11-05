<script lang="ts" setup>
import { reactive } from 'vue'

definePageMeta({ middleware: 'guest' })

const { handleLogin } = useAuth()
const { errors, isSubmitting, validate } = useFormValidation()

const formData = reactive({ username: '', email: '' })

const onSubmit = () => {
  if (validate(formData)) {
    isSubmitting.value = true
    handleLogin(formData.username.trim(), formData.email.trim())
  }
}
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
  >
    <div class="w-96 rounded-lg bg-white p-8 shadow-2xl">
      <h1 class="mb-6 text-center text-3xl font-bold text-gray-800">Login</h1>

      <div v-if="errors.length" class="mb-4 rounded-lg border border-red-200 bg-red-50 p-3">
        <p v-for="(error, index) in errors" :key="index" class="text-sm text-red-600">
          {{ error }}
        </p>
      </div>

      <form class="space-y-4" @submit.prevent="onSubmit">
        <div>
          <label for="username" class="mb-1 block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:bg-gray-400"
        >
          {{ isSubmitting ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>
