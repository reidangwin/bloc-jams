// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        {title: 'Blue', duration: '4:26'},
        {title: 'Green', duration: '3:14'},
        {title: 'Red', duration: '5:01'},
        {title: 'Pink', duration: '3:21'},
        {title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        {title: 'Hello, Operator?', duration: '1:01'},
        {title: 'Ring, ring, ring', duration: '5:01'},
        {title: 'Fits in your pocket', duration: '3:21'},
        {title: 'Can you hear me now?', duration: '3:14'},
        {title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumMariaDemaio = {
    title: 'Maria DeMaio',
    artist: 'Maria DeMaio',
    label: 'Maria DeMaio',
    year: '2007',
    albumArtUrl: 'assets/images/album_covers/maria_demaio_cover.jpg',
    songs: [
        {title: 'Her Side', duration: '3:06'},
        {title: 'Beyond the Pale', duration: '3:38'},
        {title: 'Champagne & Cigarettes', duration: '4:23'},
        {title: 'Swell', duration: '3:43'},
        {title: 'Further Behind', duration: '5:11'},
        {title: 'In My Head', duration: '3:53'},
        {title: 'Elanor', duration: '3:57'},
        {title: 'Fine Line', duration: '3:25'},
        {title: 'Unglued', duration: '2:48'}
    ]
};
var createSongRow = function (songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
        + '  <td class="song-item-number">' + songNumber + '</td>'
        + '  <td class="song-item-title">' + songName + '</td>'
        + '  <td class="song-item-duration">' + songLength + '</td>'
        + '</tr>'
    ;
    return template;
};

var setCurrentAlbum = function (album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl)

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

setCurrentAlbum(albumPicasso);

var toggleAlbum = function() {
    var albumTitle = document.getElementsByClassName('album-view-title')[0].innerText;
    if (albumTitle === 'The Colors') {
        setCurrentAlbum(albumMarconi);
    } else if (albumTitle === 'The Telephone') {
        setCurrentAlbum(albumMariaDemaio);
    } else if (albumTitle === 'Maria DeMaio') {
        setCurrentAlbum(albumPicasso);
    }

};
window.onload = function() {
    var albumCover = document.getElementsByClassName('album-cover-art')[0];
    albumCover.addEventListener('click', function (event) {
        toggleAlbum();
    });

};

