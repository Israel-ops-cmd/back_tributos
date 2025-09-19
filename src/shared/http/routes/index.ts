import { Router } from "express"
import leadsRouter from "../../../modules/leads/routes/LeadRoutes.js"

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello dev!' })
})
routes.use('/leads', leadsRouter)

export default routes