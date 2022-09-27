const {getCharactersMains}  = require('./getCharactersMains')

function getCharacters() {
    let characters = []

    const names = [
       'Light Yagami' ,'L','Ryuk','Misa Amane','Rem','Near','Mello','Teru Mikami','Minoru Tanaka','Soichiro Yagami','Sachiko Yagami','Sayu Yagami','David Hoope','Koreyoshi Kitamura','Kanichi Takimura','Yamamoto','Kurou Otaharada','Takuo Shibuimaru','Lind L. Tailor'
    ]

    const descriptions = [
        'Light Yagami (夜神月, Yagami Raito) is the main protagonist of the Death Note series. After discovering the Death Note, he decides to use it to rid the world of criminals. His killings are eventually labelled by the people living in Japan as the work of Kira.',

        'L (エル, Eru) is a world-renowned detective who takes on the challenge of catching the mass murderer known as Kira. In his investigation, L becomes suspicious of Light Yagami and makes it his goal to prove that Light is Kira.',
        'Ryuk (リューク, Ryūku) is a Shinigami who indirectly gives Light Yagami a Death Note after becoming bored with the Shinigami Realm. In an effort to amuse himself, he steals a second Death Note and drops it into the Human World for someone to find. This Death Note is discovered by Light, who uses it in an attempt to cleanse the world of evil and injustice, satisfying Ryuk need for entertainment.',

        'Misa Amane (弥 海砂, Amane Misa) is an up-and-coming model, actress, and supporter of Kira who eventually becomes the Second Kira. After gaining a Death Note, she seeks out Kira in order to thank him for killing the man who murdered her family and to offer him her help. Having made the trade for the Shinigami Eyes, Misa learns that the identity of Kira is Light Yagami. After a meeting with Light, she decides to dedicate her life to helping Light however she can, and becomes determined to use her eyes to uncover L real name.',

        'Rem (レム, Remu) is the Shinigami who gives Misa Amane one of the Death Notes she had. Like Ryuk, Rem possesses two Death Notes; however, Rem did not get hers through trickery. The Shinigami Gelus, who had fallen in love with Misa, sacrificed himself to kill her destined murderer. In doing so he was reduced to dust, leaving only his Death Note. Rem delivered this Death Note to Misa, since it was her life he saved.',

        'Near (ニア, Nia) is the younger of L two successors, raised in Wammy House—Watari orphanage for gifted children in Winchester, England. After L death, Near begins his investigation of the Kira case, gathering evidence over a period of four years. Near takes his findings to the President of the United States and reveals himself to be the true successor of L. Soon after, Near becomes the head of the Special Provision for Kira and continues the hunt for Kira. After making contact with "L" (Light Yagami), Near begins to suspect that he is also Kira.',

        'Mello (メロ, Mero) is the older of L two successors raised at Wammy House, Watari orphanage for gifted children in Winchester, England. When Roger asks that Mello and Near work together to capture Kira, Mello refuses, pointing out the differences between them. He leaves the orphanage soon after and eventually seeks help from the Mafia.',

        'Teru Mikami is a criminal prosecutor, a fanatical supporter of Kira, and the fourth Kira. When Light needs a new Kira proxy to hide his identity, Mikami is selected as the new Kira by Light, purely based on his intuition.[14] Since childhood, Mikami has had a strong sense of justice, but his views have become warped due to years of bullying and trauma.[15] Mikami wishes to punish those he considers to be evil (which, to Light dismay, includes unproductive people and reformed criminals) and worships Kira as a god. Mikami mutters the word "delete" (削除, sakujo) repeatedly to himself while writing in the Death Note, which Tsugumi Ohba felt made him more interesting',

        'Minoru Tanaka (田中実, Tanaka Minoru The new possessor of the Death Note and the main protagonist of Death Note: Special One Shot, he decides to auction off the Death Note instead of using it. Having Ryuk go out to send his instructions to Sakura TV, he creates a hashtag to auction off the Death Note, ultimately leading to world governments bidding on the Death Note, ultimately getting the United States to bid $10,000,000,000,000 for it, while various law enforcement agencies are out to catch Minoru, whom Near names "A-Kira". During that time though, the Shinigami King is infuriated by the idea of the Note itself being for sale, and creates a new rule to the Note. After the Note is paid for by depositing the money equally into the savings account of every Japanese person 60 or below, the new rule is revealed to be that anyone involved in the buying or selling of the Death Note will be killed upon fulfillment of the deal. The US president balks at this, and secretly refuses to take ownership of the note (though mentioning he will publicly bluff about having it), and Minoru dies immediately after trying to cash out his payment.',

        'Soichiro is a kind man with a strong sense of justice. He cares greatly for his family and the members of the Japanese Task Force. He is a serious and responsible man that gains the respect of many. He has a strong sense of duty, and even after the police stop funding the Kira investigation he continues trying to solve the case with the Task Force.',

        'Sachiko Yagami is the wife of Soichiro Yagami and the mother of Light. Like her daughter Sayu, she is unaware of Light ever being Kira even after his death. She is portrayed by Michiko Godai in the live-action films.In the live-action drama, Sachiko dies during her treatment, when Light and Sayu was a kid. design 130" /> Author Tsugumi Ohba considers both Sachiko and Sayu as the purest characters in the series stating that he could not "sense any evil or twistedness from these two at all." The Yagami family is thought to be the most "pitiful" characters in the book by both creators with Ohba later adding that he felt sympathy for mother and daughter',

        'Sayu Yagami is Light kindhearted younger sister. Like her mother she never learns of Light possession of the Death Note or his identity as Kira. In the manga and anime, after Takimura death, Mello gang kidnaps her in exchange for the Death Note possessed by the investigation team. Although being returned unharmed, Sayu falls into a state of shock, eventually becoming unresponsive to the presence of others. In the live-action films, her character is portrayed by actress Hikari Mitsushima, and since the mafia does not play a role, she is not kidnapped. In the drama series, Sayu is portrayed by Reiko Fujiwara.',

        'David Hoope is the President of the United States of America in the storyline. He assists in the formation of Near SPK, and provides information and funding to Mello under threats of the Death Note. He turns to Light, despite knowing that he is not the real L, who manipulates him into providing assistance and attacking Mello hideout. When the attack fails, President Hoope commits suicide to prevent Mello from writing his name and making him launch a nuclear strike. How to Read 13 states "It is believed that Kira disposed of him."[64] In the second Rewrite special, the mafia plot is omitted, with Light instead blackmailing him to leak information about the SPK. Light in turn forwards this information to Takada and Mikami, and they kill the SPK. In the anime, the character was merged with that of George Sairas.',

        'Koreyoshi Kitamura is the deputy director of the NPA and Soichiro superior. He feels weighted by Yotsuba pressure. How to Read 13 states that he "is not a bad guy',

        'Kanichi Takimura is the head director of the NPA. He is kidnapped by Mello in order to be used as a hostage in exchange for the Death Note. He is later controlled to commit suicide by Light Yagami.',

        'Yamamoto is the newest member of the NPA who only appears in the final chapter, Finale. He works as Matsuda junior, and was seen troubled by Matsuda bothering him with going to a bar. In the special one-shot chapter set three years later, he can be seen in the same room with the rest of the team, albeit not belonging to them, as noted by Matsuda. According to Tsugumi Ohba, the character was added during the continuity stage to show dirty side of Matsuda as a senior member, and there was no other specific intention to the inclusion of him.',

        'An unemployed 42-year-old man, Kurou Otoharada is the first criminal that Light kills. Otoharada name is announced on television as he holds eight hostages in a nursery school. As this incident was reported only on local television, it helped L narrow down Kira whereabouts.',

        'Takuo Shibuimaru, nicknamed "Shibutaku" (シブタク, "Cool Taku"), is the second person that Light kills. Shibuimaru rides a motorcycle and travels with a group of bikers. After Light sees him harassing and chasing a woman (in the anime, he was about to rape the woman), Light writes his name down with a death by traffic accident. A truck slams into Shibuimaru motorcycle, killing him. It was this death that fully convinces Light that the Death Note does work. In the manga Light feels some guilt since Shibuimaru is not a criminal.',

        'Lind L. Tailor is a convicted criminal waiting on death row for an unspecified capital offence; this information was kept secretly away from the public. L places Tailor as his decoy on television in exchange for being pardoned by the government. The television states that the broadcast is worldwide and that Tailor statements are being translated into Japanese. After Tailor states that he is "L", he reads a declaration stating that Kira is evil. Light, in a rage, kills Tailor with a heart attack. The real L announces that Tailor was a decoy, a criminal on death row, and discovers that Kira cannot kill the real L without having seen his face, and that Kira is in Kanto, as that was the only area that the appearance was actually broadcast in.'
    ]

    const charactersMains = getCharactersMains()

    const charactersEyesColor = [
        'brown','brown','yellow','brown','yellow','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','brown','black'
    ]

    const charactersHairColor = [
        'brown','black','black','yellow','white','white','yellow','black','black','black','brown','brown','yellow','white','yellow','black','brown','brown','black'
    ]

    const charactersSpecie = [
        'Human','Human','Shinigami','Human','Shinigami','Human','Human','Human','Human','Human','Human','Human','Human','Human','Human','Human','Human','Human','Human'
    ]

    const charactersHeight = [
        179,179,230,249,155,171,175,184,158,180,182,null,null,null,null,null,null
    ]

    const charactersAge = [
        17,24,null,19,null,17,19,27,17,47,48,14,null,null,null,null,43,23,null
    ]

    const charactersGenre = [
        'male','male','male','female','female','male','female','male','male','male','female','female','male','male','male','male','male','male'
    ]

    const charactersCountrie = [
        'Japan','Japan','Japan',null,'Japan',null,'Japan','Japan','Japan','Japan','Japan','Japan','Unites States','Japan','Japan','Japan','Japan','Japan','United States'
    ]

    const characterBirthday = [
        'February 28th','October 31st',null,'February 14th',null,'August 24th','December 13th','June 7th','July 12th',null,null,null,null,null,null,null,null,null
    ]

    const charactersOccupation = [
        'Student','Detective','Shinigami','Famous','Shinigami','Detective','Detective','Criminal','Student','Detective','Mom','Student','President','Deputy Director','Kidnapped','Task Force Agent','Criminal','Criminal','Criminal'
    ]

    names.forEach((name,i)=>{
        characters.push({
            id: i+1,
            name:names[i], 
            url:`localhost:3000/characters/${i+1}`,
            description: descriptions[i], 
            mainCharacter: name === charactersMains[i] ? true : false,
            infos: {
                physics: {
                    eyeColor: charactersEyesColor[i],
                    hairColor: charactersHairColor[i],
                    height: charactersHeight[i],
                    specie:charactersSpecie[i]
                },
                personals: {
                    age:charactersAge[i],
                    genre:charactersGenre[i],
                    country:charactersCountrie[i],
                    occupation:charactersOccupation[i]
                }
            }       
        })
    })

    return characters
}

module.exports = {getCharacters}