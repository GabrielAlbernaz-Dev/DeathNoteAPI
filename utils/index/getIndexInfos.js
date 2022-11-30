function getIndexInfos() {
    return {
        auth: {
            login:'localhost:3000/auth/user',
            register: 'localhost:3000/auth/register'
        },
        anime:"localhost:3000/anime",
        characters:"localhost:3000/characters",
        organizations:"localhost:3000/organizations"
    }
}

module.exports = {getIndexInfos}