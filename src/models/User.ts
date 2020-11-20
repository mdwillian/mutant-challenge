import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Address from './Address';
import Company from './Company';

@Entity('users')
class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;
}

export default User;
