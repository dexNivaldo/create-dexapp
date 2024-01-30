export class RequestError extends Error {
  response
  status
  message
  constructor (response: Response) {
    super(response.statusText)
    this.response = response
    this.message = response.statusText
    this.status = response.status
  }
}
