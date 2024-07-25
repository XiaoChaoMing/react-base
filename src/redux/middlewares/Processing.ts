/* tslint:disable */
const processing = () => (next: any) => (action: any) => {
  const result = next(action)
  return result
}

export { processing }
