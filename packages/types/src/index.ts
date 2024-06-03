export interface SortType {
  column?: string
  type?: string
}

export interface ManageColumnType {
  name: string
  column: string
}

export interface SortFormType {
  column?: string
  type?: string
}

export interface FilterFormType {
  column?: string
  value?: string
}

export interface FilterItem {
  name: string
  column: string
  value: string
}