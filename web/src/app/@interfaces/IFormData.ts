type Form = {
  id: string
  eventName: string
  uploadedFile: File | null
  coverImage: string
  privacy: "public" | "private"
  description: string
  cep: string
  number: string
  address: string
  complement: string
  neighborhood: string
  city: string
  state: string
  startDate: Date
  startTime: string
}

interface IFormData {
  selectedToEdit: Form | null
  eventName: string
  uploadedFile: File | null
  coverImage: string
  privacy: "public" | "private"
  description: string
  cep: string
  number: string
  address: string
  complement: string
  neighborhood: string
  city: string
  state: string
  startDate: Date
  startTime: string
}

interface InputValues {
  eventName: string
  cep: string
  number: string
  address: string
  complement: string
  description: string
  neighborhood: string
  city: string
  state: string
  startDate: Date
  startTime: string
}
