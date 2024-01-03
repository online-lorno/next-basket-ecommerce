import { STORAGE_KEY } from '@/constants'
import { CartProduct } from '@/lib/types'

export type CustomerState = {
  cart: CartProduct[]
  favorites: number[]
}

export const CustomerInitialState = (): CustomerState => {
  const jsonStorage = localStorage.getItem(STORAGE_KEY)
  const storedCustomerState = jsonStorage
    ? (JSON.parse(jsonStorage) as CustomerState)
    : undefined

  return {
    cart: storedCustomerState?.cart || [],
    favorites: storedCustomerState?.favorites || [],
  }
}
