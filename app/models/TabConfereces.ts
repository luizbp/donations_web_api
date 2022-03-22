import { Model, DataTypes } from "sequelize";

export type TypeTabConfereces = {
  id?: number;
  tb_users_id: number;
  description: string;
  link_avatar: string;
  about: string;
  title_address: string;
  address: string;
  opening_hours: string;
  ind_active: boolean;
};

export class TabConfereces extends Model<TypeTabConfereces> {
  static initialize(sequelize: any) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: "compositeIndex",
        },
        tb_users_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          unique: "compositeIndex",
        },
        description: DataTypes.STRING,
        link_avatar: DataTypes.STRING,
        about: DataTypes.STRING,
        title_address: DataTypes.STRING,
        address: DataTypes.STRING,
        opening_hours: DataTypes.STRING,
        ind_active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "tb_conferences",
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.TabUsers, { foreignKey: "tb_users_id", as: "users" });
  }
}
