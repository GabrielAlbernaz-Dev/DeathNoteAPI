function getAnimeInfo(req, res, next) {
     const infos = {
        animeName: 'Death Note',
        description:'Death Note (stylized in all caps) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named "Kira", and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha manga magazine Weekly Shōnen Jump from December 2003 to May 2006. Its 108 chapters were collected in 12 tankōbon volumes.',
        genres:['Mystery','Psychological thriller','Supernatural thriller'],
        productionInfos: {
            manga: {
                writtenBy:'Tsugumi Ohba',
                illustratedBy:'Takeshi Obata',
                publishedBy:'Shueisha',
                englishPublishers:['Viz Media','Madman Entertainment'],
                imprint:'Jump Comics',
                demographic:'Shounen',
                originalRun:' December 1, 2003 – May 15, 2006'
            },

            novel: {
                writtenBy:'Nisio Isin',
                publishedBy:'Shueisha',
                englishPublishers:['Viz Media'],
                published:'August 1, 2006'
            },

            anime: {
                directedBy:'Tetsurō Araki',
                productedBy:['Toshio Nakatani','Manabu Tamura','Masao Maruyama'],
                writtenBy:'Toshiki Inoue',
                musicBy:['Yoshihisa Hirano','Hideki Taniuchi'],
                studio:'Madhouse',
                licensedBy:['Crunchyroll','Viz Media'],
                genre:'Shounen',
                originalRun:'October 4, 2006 – June 27, 2007'
            },

        }
     }
     return infos
 
}

module.exports = {getAnimeInfo}