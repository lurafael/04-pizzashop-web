import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(data: RegisterRestaurantBody) {
  await api.post('/restaurants', data)
}
