import { Sequelize, DataTypes, Model } from 'sequelize';

export default class Todo extends Model {
  public static initialize(sequelize: Sequelize){
    Todo.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      message: DataTypes.STRING,
      state: DataTypes.STRING,
      /*B-addModelAttributes*/
    }, {
      sequelize,
      modelName: 'Todo'
    });
  }
}