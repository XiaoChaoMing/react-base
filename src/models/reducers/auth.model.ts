export interface IAuth {
  loading: boolean
  isAuthenticated: boolean
  account: {
    authorities: Array<string>
  }
}
export const defaultAuth: Readonly<IAuth> = {
  loading: false,
  isAuthenticated: false,
  account: {
    authorities: [],
  },
}
