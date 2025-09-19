import { AppDataSource } from "@shared/typeorm/data-source"
import { Leads } from "../entities/Leads"

export const leadsRepositories = AppDataSource.getRepository(Leads).extend({
  async findByName(name: string): Promise<Leads | null> {
    return this.findOneBy({ name })
  }
})