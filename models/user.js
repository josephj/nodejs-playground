module.exports = function(sequelize, Sequelize) {
    return sequelize.define('user', {
      name: {
        type: Sequelize.STRING
      }
    });
}
