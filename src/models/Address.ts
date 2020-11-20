import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column({
    type: 'json',
  })
  geo: {
    lat: number;
    lng: number;
  };
}

export default Address;
