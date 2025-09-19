import { Request, Response } from "express"
import ListLeadsService from "../services/ListLeadsService"
import ShowLeadsService from "../services/ShowLeadsService"
import CreateLeadsService from "../services/CreateLeadsService"
import UpdateLeadsService from "../services/UpdateLeadsService"
import DeleteLeadsService from "../services/DeleteLeadsService"

export default class LeadsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listLeadsService = new ListLeadsService()
    const leads = await listLeadsService.execute()
    return response.json(leads)
  }

  async show(request: Request, response: Response): Promise<Response> {
    const {id } = request.params
    const showLeadsService = new ShowLeadsService()
    const lead = await showLeadsService.execute({ id: Number(id) })
    return response.json(lead)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, message } = request.body
    const createLeadsService = new CreateLeadsService()
    const lead = await createLeadsService.execute({ name, email, message })
    return response.json(lead)
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, email, message } = request.body
    const updateLeadsService = new UpdateLeadsService()
    const lead = await updateLeadsService.execute({ id: Number(id), name, email, message})
    return response.json(lead)
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteLeadsService = new DeleteLeadsService()
    await deleteLeadsService.execute({ id: Number(id) })
    return response.status(204).send([])
  }
}