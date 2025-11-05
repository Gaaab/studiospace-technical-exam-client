export const useAuth = () => {
  const userStore = useUserDataStore()
  const router = useRouter()

  const handleLogin = (username: string, email: string) => {
    userStore.login(username, email)
    router.replace('/welcome')
  }

  const handleLogout = () => {
    userStore.logout()
    router.push('/')
  }

  return {
    handleLogin,
    handleLogout,
    isLoggedIn: userStore.isLoggedIn,
  }
}
