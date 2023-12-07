module.exports = (sequelize, DataTypes) => {
    
  const User = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true  
      }
    },
    google_id: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isURL: true  
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW 
    },
    last_login: {
      type: DataTypes.DATE,
    },

  }, {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  });

  return User;
}