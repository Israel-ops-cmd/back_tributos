import { Leads } from "../database/entities/Leads";
import { leadsRepositories } from "../database/repositories/LeadsRepositories";

export default class ListLeadsService {
  async execute(): Promise<Leads[]> {
    const leads = await leadsRepositories.find()
    return leads
  }
}