export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserDataStore()

  if (userStore.isLoggedIn) {
    return navigateTo('/welcome')
  }
})
