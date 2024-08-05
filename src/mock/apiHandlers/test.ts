import { http, HttpResponse, RequestHandler } from 'msw'
import { faker } from '@faker-js/faker'

const handlers: RequestHandler[] = [
  http.get('/api/list', () => {
    return HttpResponse.json({
      code: 0,
      data: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
      message: 'success',
    })
  }),
]
export default handlers
