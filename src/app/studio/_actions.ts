'use server'

import { checkRole } from '@/utils/roles'
import { clerkClient } from '@clerk/nextjs/server'

export async function setRole(formData: FormData) {
  try {
    // update the user's role
  } catch (err) {
    return { message: err }
  }
}