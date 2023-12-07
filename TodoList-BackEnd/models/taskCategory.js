module.exports = (sequelize, DataTypes) => {
    
  const TaskCategory = sequelize.define('TaskCategory', {
    // Remova o campo task_category_id se ele não existir na tabela real
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks', // nome da tabela como definido no PostgreSQL
        key: 'task_id', // chave primária da tabela de tarefas
      },
      onDelete: 'CASCADE',
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories', // nome da tabela como definido no PostgreSQL
        key: 'category_id', // chave primária da tabela de categorias
      },
      onDelete: 'CASCADE',
    },
  }, {
    timestamps: false, // Não há campos de timestamp nesta tabela
    tableName: 'taskcategories', // Nome da tabela como definido no PostgreSQL
    underscored: true, // Esta opção é para manter a consistência na nomenclatura
  });

  return TaskCategory;
}