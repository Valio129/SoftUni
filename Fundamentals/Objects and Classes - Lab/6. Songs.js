// shift the first element and take it as the number of songs
// pop the desired typeOf songs
// create cass as template for the "song" objects and push them into array
// loop through the array and crate new 'songs'
// if the typeList is 'all' - print all songs, else print the desired ones   
function songs(array) {
    const numberOfSongs = array.shift()
    const typeList = array.pop()
    let songs = []
    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }

    }
    for (let i = 0; i < numberOfSongs; i++) {
        let token = array[i];
        token = token.split("_");
        let song = new Song(token[0], token[1], token[2])
        songs.push(song);
    }
    if (typeList === "all") {
        for (const song of songs) {
            console.log(song.name);
        }
    } else {
        for (const song of songs) {
            if (song.type === typeList) {
                console.log(song.name);
            }
        }
    }
}
songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite']);