module.exports = (sequelize, DataTypes) => {
    
  const Category = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull é true por padrão, o que permite que a descrição seja opcional
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Define o valor padrão para a data e hora atuais
    },
  }, {
    timestamps: false, // Desativa a adição automática dos campos timestamps
    tableName: 'categories', // Especifica o nome exato da tabela como definido no PostgreSQL
    underscored: true, // Se você está usando snake_case no banco de dados
  });

  return Category;
}