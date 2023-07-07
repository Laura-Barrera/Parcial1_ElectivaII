const express = require('express')

const router = express.Router()

const {miMapa} = require('../datos')

router.get('/',(req,res)=> res.render('index',{'title':'Melissa Barrera'}))

router.get('/visualizacion',(req,res)=> res.render('visualizar',{'title':'Melissa Barrera','peliculas': miMapa}))

router.get('/eliminar',(req,res)=> res.render('eliminar',{'title':'Melissa Barrera','peliculas': miMapa}))

module.exports = router