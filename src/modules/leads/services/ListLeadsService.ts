import { Leads } from "../database/entities/Leads.js"
import { leadsRepositories } from "../database/repositories/LeadsRepositories.js"

export default class ListLeadsService {
  async execute(): Promise<Leads[]> {
    const leads = await leadsRepositories.find()
    return leads
  }
}