module.exports = (sequelize, dataTypes) => {
    let alias = "Actors";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps : false
    } 
    
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Movies, {
            as: 'movies',
            through: 'actor_movie',
            otherKey: 'movie_id',
            foreignKey: 'actor_id',
            timestamps: false
        })
    }

    return Actor;
}