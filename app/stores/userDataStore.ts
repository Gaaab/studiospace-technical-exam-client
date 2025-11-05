export const useUserDataStore = defineStore(
  'userData',
  () => {
    const username = ref<string>('')
    const email = ref<string>('')

    const isLoggedIn = computed(() => Boolean(username.value))

    function login(newUsername: string, newEmail: string) {
      username.value = newUsername
      email.value = newEmail
    }

    function logout() {
      username.value = ''
      email.value = ''
    }

    return {
      username,
      email,
      isLoggedIn,
      login,
      logout,
    }
  },
  {
    persist: true, // or we can use localstorage/sessionstorage options here
  }
)
