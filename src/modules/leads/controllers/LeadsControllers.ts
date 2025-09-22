import { Request, Response } from "express"
import ListLeadsService from "../services/ListLeadsService.js"
import ShowLeadsService from "../services/ShowLeadsService.js"
import CreateLeadsService from "../services/CreateLeadsService.js"
import UpdateLeadsService from "../services/UpdateLeadsService.js"
import DeleteLeadsService from "../services/DeleteLeadsService.js"


interface AppError extends Error {
  statusCode?: number
}

export default class LeadsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listLeadsService = new ListLeadsService()
      const leads = await listLeadsService.execute()
      return response.json(leads)
    } catch (error: unknown) {
      const err = error as AppError
      return response.status(err.statusCode || 500).json({
        type: "error",
        message: err.message || "Internal server error",
      })
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const showLeadsService = new ShowLeadsService()
      const lead = await showLeadsService.execute({ id: Number(id) })
      return response.json(lead)
    } catch (error: unknown) {
      const err = error as AppError
      return response.status(err.statusCode || 500).json({
        type: "error",
        message: err.message || "Internal server error",
      })
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, message } = request.body
      const createLeadsService = new CreateLeadsService()
      const lead = await createLeadsService.execute({ name, email, message })
      return response.json(lead)
    } catch (error: unknown) {
      const err = error as AppError
      return response.status(err.statusCode || 500).json({
        type: "error",
        message: err.message || "Internal server error",
      })
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { name, email, message } = request.body
      const updateLeadsService = new UpdateLeadsService()
      const lead = await updateLeadsService.execute({ id: Number(id), name, email, message })
      return response.json(lead)
    } catch (error: unknown) {
      const err = error as AppError
      return response.status(err.statusCode || 500).json({
        type: "error",
        message: err.message || "Internal server error",
      })
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const deleteLeadsService = new DeleteLeadsService()
      await deleteLeadsService.execute({ id: Number(id) })
      return response.status(204).send([])
    } catch (error: unknown) {
      const err = error as AppError;
      return response.status(err.statusCode || 500).json({
        type: "error",
        message: err.message || "Internal server error",
      })
    }
  }
}
