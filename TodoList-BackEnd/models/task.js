module.exports = (sequelize, DataTypes) => {
    
  const Task = sequelize.define('Task', {
    task_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nome da tabela como definido no PostgreSQL
        key: 'user_id',
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull é true por padrão
    },
    due_date: {
      type: DataTypes.DATE,
      // allowNull é true por padrão
    },
    status: {
      type: DataTypes.ENUM('Not Started', 'In Progress', 'Completed', 'On Hold'),
      // allowNull é true por padrão
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High', 'Urgent'),
      // allowNull é true por padrão
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      // allowNull é true por padrão
    }
  }, {
    timestamps: false, // Desativa a adição automática dos campos timestamps
    tableName: 'tasks', // Especifica o nome exato da tabela
    underscored: true, // Se você está usando snake_case no banco de dados
  });

  return Task;
}