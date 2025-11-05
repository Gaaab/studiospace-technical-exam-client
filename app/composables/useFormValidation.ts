import type { FormData } from '@/types/AuthForm'

export const useFormValidation = () => {
  const errors = ref<string[]>([])
  const isSubmitting = ref(false)

  const validateUsername = (username: string): string | null => {
    if (!username || username.trim().length === 0) {
      return 'Username is required'
    }
    if (username.trim().length < 3) {
      return 'Username must be at least 3 characters'
    }
    return null
  }

  const validateEmail = (email: string): string | null => {
    if (!email || email.trim().length === 0) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address'
    }
    return null
  }

  const validate = (formData: FormData): boolean => {
    errors.value = []

    const usernameError = validateUsername(formData.username)
    const emailError = validateEmail(formData.email)

    if (usernameError) errors.value.push(usernameError)
    if (emailError) errors.value.push(emailError)

    return errors.value.length === 0
  }

  return {
    errors,
    isSubmitting,
    validate,
  }
}
