import { AppDataSource } from "@shared/typeorm/data-source"
import { Leads } from "../entities/Leads"

export const leadsRepositories = AppDataSource.getRepository(Leads).extend({
  async findByEmail(email: string): Promise<Leads | null> {
    return this.findOneBy({ email })
  },

  async findById(id: number): Promise<Leads | null> {
    return this.findOneBy({ id })
  }
})