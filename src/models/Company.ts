import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  name: string;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;
}

export default Company;
