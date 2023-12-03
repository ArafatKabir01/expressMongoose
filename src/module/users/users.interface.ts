export type TUsers = {
  id: string
  password?: string | undefined
  needPasswordChange: boolean
  role: 'admin' | 'student' | 'faculty'
  status: 'in-progress' | 'bloock'
  isDeleted: boolean
}
