module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
  }, {
    tableName: 'users'
  });

  User.associate = function (models) {
    User.hasMany(models.message, {foreignKey: 'author_id'});
  //  User.hasMany(models.topic);
  };
  return User;
};

