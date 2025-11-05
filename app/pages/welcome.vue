<script lang="ts" setup>
definePageMeta({ middleware: ['auth'] })
const userStore = useUserDataStore()
const { handleLogout } = useAuth()
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 to-blue-500"
  >
    <div class="w-full max-w-md rounded-lg bg-white p-10 text-center shadow-2xl">
      <h1 class="mb-4 text-3xl font-bold text-gray-800">Welcome Back!</h1>
      <p class="mb-6 text-xl text-gray-600">
        Hello,
        <span class="font-semibold text-blue-600">{{ userStore.username }}</span>
      </p>

      <div class="mb-6 rounded-lg bg-blue-50 p-4">
        <p class="text-sm text-gray-700">
          <span class="font-medium">Email:</span>
          {{ userStore.email }}
        </p>
      </div>

      <button
        @click="handleLogout"
        class="w-full rounded-lg bg-red-500 py-3 font-semibold text-white transition duration-200 hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  </div>
</template>
