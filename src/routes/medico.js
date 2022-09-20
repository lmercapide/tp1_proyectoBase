'use strict'

const { DataTypes } = require("sequelize")

module.exports = (sequelize, dataTypes) => {

    let Medico = sequelize.define('medico', {
        
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allownull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allownull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            field: created_at,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },



    })


}