module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: DataTypes.STRING
  }, {
    tableName: 'users'
  });

  User.associate = function (models) {
    User.hasMany(models.message, {foreignKey: 'author_id', allowNull: false});
  //  User.hasMany(models.topic);
  };
  return User;
};

