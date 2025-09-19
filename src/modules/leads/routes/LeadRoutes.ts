import { Router } from "express"
import LeadsControllers from "../controllers/LeadsControllers.js"

const leadsRouter = Router()
const leadsController = new LeadsControllers()

leadsRouter.get('/', leadsController.index)
leadsRouter.get('/:is', leadsController.show)
leadsRouter.post('/', leadsController.create)
leadsRouter.put('/:id', leadsController.update)
leadsRouter.delete('/:id', leadsController.delete)

export default leadsRouter

