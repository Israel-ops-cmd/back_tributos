import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('leads')
export class Leads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar'})
  email: string;

  @Column({ type: 'text', nullable: true})
  message: string;

  @Column({ type: 'timestamp', default: () => 'now()'})
  created_at: Date;
}