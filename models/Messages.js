module.exports = function (sequelize, DataTypes) {
  var Message = sequelize.define('message', {
    body: {type: DataTypes.STRING, allowNull: false}
  }, {
    tableName: 'messages'
  });

  Message.associate = function (models) {
    Message.belongsTo(models.topic);
  };
  return Message;
};

