export interface IResponse<T> {
  data: T
  status?: number
  statusCode?: number
  message?: string
}
