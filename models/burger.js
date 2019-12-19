module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a a new burger complete value to false if
            // it isn't devoured
            defaultValue: false
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return Burger;
};
