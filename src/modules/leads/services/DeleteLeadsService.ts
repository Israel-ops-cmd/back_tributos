import AppError from "../../../shared/errors/AppError"
import { leadsRepositories } from "../database/repositories/LeadsRepositories"

interface IDeleteLeads {
  id: number
}

export default class DeleteLeadsService {
  async execute({ id }: IDeleteLeads): Promise<void> {
    const lead = await leadsRepositories.findById(id)

    if(!lead) {
      throw new AppError('Customer not found!', 404)
    }

    await leadsRepositories.remove(lead)
  }
}