const movies = require("../database/models/Movie");
let db = require ("../database/models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;


const moviesController = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies){
                res.render('movies', {movies: movies})
            })
    },
    detail: function(req, res) {
        db.Movies.findAll({
//No me funcionaba findByPk y encontré esto en internet.
            where: {
                id: req.params.id
            }
        })
        .then(function(movies){
            res.render('detalleMovie', {movies: movies})
        });
    },
    create: function(req, res, next) {
        db.Genres.findAll()
            .then(function(genres) {
                res.render('crearMovie', {genres: genres})
            })
    },
    cargar: function(req, res, next){
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id
        })
        .then(function(movies) {
            res.redirect('/movies')
        })
        .then(function(movies) {
            res.render('movies', {movies: movies})
        })
    },
    edit: function(req, res) {
        db.Movies.findByPk(req.params.id)
            .then(function(movies) {
                res.render('editarMovie', {movies: movies});
        })
    },
    editar: function(req, res) {
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/movies')
    },
    eliminar: function(req, res, next){
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(movies) {
            res.redirect('/movies')
        })
        .then(function(movies) {
            res.render('movies', {movies: movies})
        })
    }
}

module.exports = moviesController;