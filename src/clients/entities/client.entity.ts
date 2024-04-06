import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IClientInterface {
  name: string;
  email: string;
  phone: string | null;
  password: string;
}

@Table({ tableName: 'clients' })
export class Client extends Model<Client> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
