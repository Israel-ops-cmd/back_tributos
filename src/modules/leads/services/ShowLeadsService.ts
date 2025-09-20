import AppError from "../../../shared/errors/AppError.js"
import { leadsRepositories } from "../database/repositories/LeadsRepositories.js"
import { Leads } from "../database/entities/Leads.js"

interface IShowLeads {
  id: number
}

export default class ShowLeadsService {
  async execute({ id }: IShowLeads): Promise<Leads> {
    const leads = await leadsRepositories.findById(id)

    if(!leads) {
      throw new AppError('Customer not found!', 404)
    }

    return leads
  }
}