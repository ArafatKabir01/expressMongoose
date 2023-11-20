export type Guardain = {
  fatherName: string
  fatherPhoneNo: string
  fatherOcopation: string
  motherName: string
  motherPhoneNo: string
  motherOcopation: string
}
export type Username = {
  firstName: string
  middlename?: string
  lastname: string
}
export type LocalGuardian = {
  name: Username
  phoneNomber: string
}
export interface Student {
  id: string
  name: Username
  adress: string
  phoneNumber: string
  email: string
  gender: 'male' | 'female'
  dateOfBirth: number
  bloodGroup: 'A+' | 'B+' | 'A-' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  guardian: Guardain
  localGuardian: LocalGuardian
  profileImg: string
  isRegular: 'regular' | 'eregular'
}
