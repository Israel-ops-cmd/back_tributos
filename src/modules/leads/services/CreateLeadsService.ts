import AppError from "../../../shared/errors/AppError"
import { Leads } from "../database/entities/Leads"
import { leadsRepositories } from "../database/repositories/LeadsRepositories"

interface ICreateLeads {
  name: string,
  email: string,
  message?: string
}

export default class CreateLeadsService {
  async execute({ name, email, message }: ICreateLeads): Promise <Leads> {
    const leadsExists = await leadsRepositories.findByEmail(email)

    if(leadsExists) {
      throw new AppError('There is already one customer with this email', 409)
    }

    const lead = leadsRepositories.create({
      name, email, message
    })

    await leadsRepositories.save(lead)

    return lead
  }
}