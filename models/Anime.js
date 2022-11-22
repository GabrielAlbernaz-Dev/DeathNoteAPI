const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    animeName:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    },
    genres:{
        type:Array,
        required: true
    },
    productionInfos: {
        manga: {
            writtenBy: {
                type: String,
                required: true 
            },
			illustratedBy: {
                type: String,
                required: true 
            },
			publishedBy: {
                type: String,
                required: true 
            },
			englishPublishers: Array,
			imprint: {
                type: String,
                required: true 
            },
			demographic: {
                type: String,
                required: true 
            },
			originalRun: {
                type: String,
                required: true 
            }
        },
        novel: {
			writtenBy: {
                type: String,
                required: true 
            },
			publishedBy: {
                type: String,
                required: true 
            },
			englishPublishers: Array,
			published: {
                type: String,
                required: true 
            },
		},
        anime: {
			directedBy: {
                type: String,
                required: true 
            },
			productedBy: {
                type: Array,
                required: true 
            },
			writtenBy: {
                type: String,
                required: true 
            },
			musicBy: {
                type: Array,
                required: true 
            },
			studio: {
                type: String,
                required: true 
            },
			licensedBy: {
                type: Array,
                required: true 
            },
			genre: {
                type: String,
                required: true 
            },
			originalRun: {
                type: String,
                required: true 
            },
		}
    }
  });

const Anime = mongoose.model('Anime',animeSchema);

module.exports = Anime;