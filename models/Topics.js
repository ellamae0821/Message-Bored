module.exports = function (sequelize, DataTypes) {
  var Topic = sequelize.define('topic', {
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
  }, {
    tableName: 'topics'
  });

  Topic.associate = function (models) {
//    Topic.hasMany(models.message);
    Topic.belongsTo(models.user, {foreignKey: 'created_by'});
    Topic.hasMany(models.message);

  };
  return Topic;
};
