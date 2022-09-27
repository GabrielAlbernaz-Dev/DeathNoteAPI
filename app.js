const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/index')
const animeRouter = require('./routes/anime');
const charactersRouter = require('./routes/characters');

const swaggerOptions = {
    customCss: `
    .swagger-ui .topbar { 
        padding:20px 0px;
    }
    .topbar-wrapper > a:after {
        content:"DeathNoteAPI Docs";
    }
    .topbar-wrapper > a > img {
        display:none;
    }
    `,
    customSiteTitle: "DeathNoteAPI Docs",
    customfavIcon: "https://www.logolynx.com/images/logolynx/26/2623f24b480e8dce969b38aacfc26fc8.png"
};

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,swaggerOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

//Routes
app.use('/',indexRouter)
app.use('/anime',animeRouter);
app.use('/characters', charactersRouter);


module.exports = app;
