import { Router } from "express"
import LeadsControllers from "../controllers/LeadsControllers.js"
import { createLeadSchema, idParamsValidation, updateLeadSchema } from "../schemas/LeadsSchemas.js"

const leadsRouter = Router()
const leadsController = new LeadsControllers()

leadsRouter.get('/', leadsController.index)
leadsRouter.get('/:id', idParamsValidation, leadsController.show)
leadsRouter.post('/', createLeadSchema, leadsController.create)
leadsRouter.put('/:id', updateLeadSchema, leadsController.update)
leadsRouter.delete('/:id', idParamsValidation, leadsController.delete)

export default leadsRouter

