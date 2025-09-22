import AppError from "../../../shared/errors/AppError.js"
import { Leads } from "../database/entities/Leads.js"
import { leadsRepositories } from "../database/repositories/LeadsRepositories.js"

interface IUpdateLeads {
  id: number,
  name: string,
  email: string,
  message: string
}

export default class UpdateLeadsService {
  async execute({ id, name, email, message }: IUpdateLeads): Promise<Leads> {
    const lead = await leadsRepositories.findById(id)

    if(!lead) {
      throw new AppError('Customer not found!', 404)
    }

    const leadExists = await leadsRepositories.findByEmail(email)

    if(leadExists && leadExists.id !== id) {
      throw new AppError('There is already one customer with this email', 409)
    }

    lead.name = name
    lead.email = email
    lead.message = message

    await leadsRepositories.save(lead)

    return lead
  }
}