const path = require('path');
module.exportos = {

    "config": path.resolve(".src/database/config", "config.js"),

    "models-path": path.resolve("./src/database/models"),

    "seeders-path" : path.resolve("./src/database/seeaders"),

    "migrations-path": path.resolve("./src/database/migrations"),



}