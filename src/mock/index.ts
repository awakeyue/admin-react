import { setupWorker } from 'msw/browser'
import testHandlers from './apiHandlers/test'
const worker = setupWorker(...testHandlers)

export default worker
