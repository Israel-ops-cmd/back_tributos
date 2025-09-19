import AppError from "../../../shared/errors/AppError"
import { leadsRepositories } from "../database/repositories/LeadsRepositories"
import { Leads } from "../database/entities/Leads"

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