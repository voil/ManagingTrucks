import { computed } from 'vue'

export const STATUS_TRUCK = {
  OUT_OF_SERVICE: 'OUT_OF_SERVICE',
  LOADING: 'LOADING',
  TO_JOB: 'TO_JOB',
  AT_JOB: 'AT_JOB',
  RETURNING: 'RETURNING'
} as const

export const colorsStatusMap: Record<string, string> = {
  [STATUS_TRUCK.OUT_OF_SERVICE]: 'secondary',
  [STATUS_TRUCK.LOADING]: 'info',
  [STATUS_TRUCK.TO_JOB]: 'warning',
  [STATUS_TRUCK.AT_JOB]: 'success',
  [STATUS_TRUCK.RETURNING]: 'danger'
}

export type StatusTruck = keyof typeof STATUS_TRUCK

export interface Truck {
  id: number
  code: string
  name: string
  status: StatusTruck
  description: string
}

export interface ManageTruckForm {
  code: string;
  name: string;
  description: string;
  status: string;
}