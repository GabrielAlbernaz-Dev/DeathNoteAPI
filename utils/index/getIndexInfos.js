function getIndexInfos() {
    return {
        auth: {
            login:'localhost:3000/auth/user',
            register: 'localhost:3000/auth/register'
        },
        docs:"http://localhost:3000/docs",
        anime:"localhost:3000/anime",
        characters:"localhost:3000/characters",
        organizations:"localhost:3000/organizations",
        places:"localhost:3000/places"
    }
}

module.exports = {getIndexInfos}