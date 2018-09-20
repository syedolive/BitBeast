const faker = require('faker');

export const NewCollection = function () {
    let data = [];
    for(var i = 0; i <= 6; i++){
        let row = {
            songName : faker.lorem.word(),
            singerName : faker.name.findName(),
            heart : faker.random.boolean(),
            key : faker.random.uuid()
        }
        data.push(row)
    }
    return data;
}

export const TopSingers = function () {
    let singers = [];
    for (var i = 0; i <= 20; i++){
        var row = {
            image : 'https://randomuser.me/api/portraits/med/men/'+i+'.jpg',
            key : faker.random.uuid(),
            name : faker.name.findName(),

        }
        singers.push(row);
    }
    return singers
}

export const TopSongs  = function () {
    let songs = [];
    for (var i = 0; i <= 20; i++){
        var row = {
            image : 'https://randomuser.me/api/portraits/med/men/'+i+'.jpg',
            songName : faker.lorem.word(),
            singerName : faker.name.findName(),
            heart : faker.random.boolean(),
            key : faker.random.uuid()

        }
        songs.push(row);
    }
    return songs;
}