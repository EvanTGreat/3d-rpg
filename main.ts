scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (GunAcquired == 1 && passed == 0 && Level == 1) {
        game.splash("you shall pass", "you have a gun")
        game.setDialogFrame(img`
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            `)
        Fight()
        passed = 1
    } else if (passed == 0 && Level == 1) {
        game.splash("go get a gun,", "then come here.")
    }
})
function Fight () {
    if (Level == 1) {
        music.stopAllSounds()
        music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`level8`)
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccceeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeccccccccccccccccccccccceeeeeeeeeeeeeeeccccccccccccccccceeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeccccccccccccccccccccccccccceeeeeeeecccccccccccccccccccceeeeeeeeeeeeeeeeeccceecccccccccccceeeeeeeeeccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccee
            eeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeccccccccccccecccccccccccccccccccccccceeccceecccccccccccceeeeeeeecccccceeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeeeeeecccccccee
            eeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeecccccccccccccccccccccecccccccccccccccceeeeeeecccccccccccceeeeeecccccceeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeecccccccccccee
            eeeeeeeeeeeeeeeecccceeeeeeeeccceeecccccccceeeccccccccceeeecccccccccccccccceeeeeeccccceeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeccccceeeeeeeeeeeeeeeeeeeeccccccccccccee
            eeeeeeeeeeeccccccccceeeeeeeeeeeeeccccccceeeeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeecccccccceeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeccccccccccceeeeeee
            eeeeeeeeeeeccccccccceeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeeeeeeecccccccceeeeeeeeeeeeecccccccccccccceeeeeeeeecccccccccccceeeeeeeeee
            eeeeeeeeeeeccccccccceeeeeeeeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeeeeeeeeeccccceeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccceeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccceeeeeeeeeeeeeeee
            bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeccceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeccccceeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccceeeeeeeeeeeeeeeeeeeb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbb
            bbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbb
            bbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbb
            bbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbb
            bbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddb
            bbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddb
            bdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
            bddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
            ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd
            ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd
            ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        boss_1 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(boss_1, tiles.getTileLocation(4, 4))
        boss_1.setScale(3, ScaleAnchor.Middle)
        Gun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . b d d b . . . . . . . 
            . . . . . b d d b . . . . . . . 
            . . . . . . d d . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b f . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(Gun, tiles.getTileLocation(4, 6))
        Gun.changeScale(4, ScaleAnchor.Middle)
        Level = 2
    }
}
function start () {
    music.play(music.createSong(hex`0064000408050305001c000f0a006400f4010a00000400000000000000000000000000000000026c0004000800012418001c00012924002800012028003000012230003400012c38003c00011e3c00400001164000480001165c006000012564006800012968006c0001296c007000012c70007c00012c80008400012088008c00011b90009400011e94009800011e98009c00011e06001c00010a006400f401640000040000000000000000000000000000000002ea0004000800011108000c0001140c001000011810001400011114001800011118001c0001141c002000011820002400011124002800011128002c0001142c003000011830003400011134003800011138003c0001143c004000011840004400011144004800011148004c0001144c005000011850005400011154005800011158005c0001145c006000011860006400011164006800011168006c0001146c007000011870007400011174007800011178007c0001147c008000011880008400011184008800011188008c0001148c009000011890009400011194009800011198009c0001149c00a000011807001c00020a006400f4016400000400000000000000000000000000000000036c0004000800012218001c00012724002800011e28003000012030003400012a38003c00011d3c00400001144000480001145c006000012464006800012768006c0001276c007000012a70007c00012a80008400011e88008c00011990009400011d94009800011d98009c00011d`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 11))
    controller.moveSprite(mySprite, 75, 75)
    GunNPC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(GunNPC, tiles.getTileLocation(15, 29))
    Level = 1
}
let gun_state = 0
let GunNPC: Sprite = null
let mySprite: Sprite = null
let Gun: Sprite = null
let boss_1: Sprite = null
let Level = 0
let GunAcquired = 0
let passed = 0
passed = 0
music.play(music.createSong(hex`00b4000408020205001c000f0a006400f4010a0000040000000000000000000000000000000002120010001400010514001800010624002800011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006000040005000b0c0d0e0f1011120001020b080009000b0c0d0e0f1011120001020b1c001d000b0c0d0e0f1011120001020b2c002d000b0c0d0e0f1011120001020b300031000b0c0d0e0f1011120001020b340035000b0c0d0e0f1011120001020b`), music.PlaybackMode.LoopingInBackground)
let text_list = [
"50 years,",
"3 communities,",
"1 goal,",
"be the best.",
"conquer the world-",
"are you ready for it",
"-Taylor Swift",
"CONTROLS: A: fight (only in battles)",
"B: talk to NPC's",
"D-PAD: move/aim gun"
]
game.setDialogFrame(img`
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee
    `)
for (let value of text_list) {
    game.showLongText(value, DialogLayout.Center)
}
music.stopAllSounds()
music.play(music.stringPlayable("E B C5 A B G A F ", 200), music.PlaybackMode.UntilDone)
timer.after(500, function () {
    scene.setBackgroundImage(img`
        9999999999555555555555555555555555555555555555555555555555555555555555555555555555559999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd999999999999999
        9999999999555555555555555555555555555555555555555555555555555555555555555555555555559999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd99999999999999
        9999999999555552222222222555555555555555555555555555555555555555555555555555555555559999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd9999999999999
        99999999999222222222222222555555555555555555555555555555555555555555555555555555555599999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd999999999999
        99999999999222222222222222255555555555555555555555555555552222255555555555555555555599999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd99999999
        9999999999922222222222222222555555555555555555222225555222222222225555555555555555559999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddd9999999
        99999999999222222222222222222555555555555555552222222222222222222225555555555555555559999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddd99999
        999999999992222222255222222222255555555555555522222222222222222222222555555555555555599999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddd9999
        99999999999555555555552222222222555555555555552222222222222222222222222555555555555559999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddd999
        9999999999955555555555522222222225555555555555222222222222222222222222225555555555555999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd9
        99999999999555555555555522222222225555555555552222222222222255222222222222255555555559999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd
        9999999999955555555555555222222222555555555552222225555555555552222222222222555555555999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddd
        99999999999555555555555555522222225555555555522222255555555555555222222222222555555559999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        999999999995555555555555555522222255555555555222222555555555555555522222222222555555599999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddd
        99999999999555555555555555552222225555555555522222255555555555555555222222222222555555999999999999999999999999999999bbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd
        999999999995555555555555555522222255555555555222225555555555555555555552222222222555559999999999999999999999999999999bbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd
        9999999999955555555555555555222225555555555552222255555555555555555555522222222222555599999999999999999999999999999999bcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        99999999999555555555555555522222255555555555522222555555555555555555555552222222225555999999999999999999999999999999999cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        99999999999555555555555555522222255555555555522222555555555555555555555555222222225555999999999999999999999999999999999ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        9999999999955555555555555522222225555555555552222255555555555555555555555555222222555599999999999999999999999999999999999ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbb
        99999999999555555555555555222222255555555555522222555555555555555555555555555222225555999999999999999999999999999999999999ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbb
        9999999999955555555555555222222255555555555522222255555555555555555555555555522222555599999999999999999999999999999999999999cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbb
        99999999999555555555555552222222555555555555222222555555555555555555555555555222225555999999999999999999999999999999999999999ccccccccccbbbbbbbbbbbbbbbbbbbbbbbbb
        9999999999995555555555522222222555555555555522222255555555555555555555555555522222555599999999999999999999999999999999999999999ccccccccccbbbbbbbbbbbbbbbbbbbbbbb
        99999999999922222255552222222225555555555555222222555555555555555555555555555222225555999999999999999999999999999999999999999999cccccccccccbbbbbbbbbbbbbbbbbbbbb
        999999999999222222252222222222555555555555552222255555555555555555555555555522222255599999999999999999999999999999999999999999999ccccccccccccbbbbbbbbbbbbbbbbbbb
        9999999999992222222222222222225555555555555522222555555555555555555555555552222222555999999999999999999999999999999999999999999999ccccccccccccbbbbbbbbbbbbbbbbbb
        9999999999992222222222222222255555555555555522222555555555555555555555555552222222555999999999999999999999999999999999999999999999ccccccccccccccbbbbbbbbbbbbbbbb
        999999999999222222222222222555555555555555552222255555555555555555555555555222222255599999999999999999999999999999999999999999999999cccccccccccccbbbbbbbbbbbbbbb
        99999999999992222222222222255555555555555555222225555555555555555555555555222222255559999999999999999999999999999999999999999999999999cccccccccccccbbbbbbbbbbbbb
        9999999999955555222222222222222222555555555522222555555555555555555555555222222255555999999999999999999999999999999999999999999999999999cccccccccccccbbbbbbbbbbb
        99999999995555552222222222222222222555555555222225555555555555555555555522222222555559999999999999999999999999999999999999999999999999999ccccccccccccccbbbbbbbbb
        9999999999555555222222222222222222225555555522222555555555555555555555522222222255555999999999999999999999999999999999999999999999999999999cccccccccccccbbbbbbbb
        999999999955555552222222222222222222225555522222255555555555555555555222222222255555599999999999999999999999999999999999999999999999999999999cccccccccccccbbbbbb
        9999999999555555555555222222222222222255555222222555555555555555555522222222222555555999999999999999999999999999999999999999999999999999999999cccccccccccccbbbbb
        999999999955555555555555555552222222222255522222255555555555555555552222222225555555599999999999999999999999999999999999999999999999999999999999ccccccccccccbbbb
        99999999995555555555555555555552222222225552222225555555555555555522222222225555555559999999999999999999999999999999999999999999999999999999999999cccccccccccbbb
        9999999999555555555555555555555522222222555222225555555555555555522222222225555555555999999999999999999999999999999999999999999999999999999999999999cccccccccbbb
        99999999999555555555555555555555522222225552222255555555555555522222222225555555555559999999999999999999999999999999999999999999999999999999999999999ccccccccbbb
        999999999995555555555555555555552222222255522222555555555555552222222222255555555555999999999999999999999999999999999999999999999999999999999999999999cccccccbbb
        99999999999555555555555555555552222222255552222255555555555552222222222255555555555599999999999999999999999999999999999999999999999999999999999999999999cccccbbb
        9999999999955555555555555555552222222225555222225555555555552222222222555555555555599999999999999999999999999999999999999999999999999999999999999999999999eeeeee
        9999999999955555555555555555522222222255555222225555555555522222222225555555555555999999999999999999999444444444499999999999999999999999999999999999999999eeeeee
        999999999992222255555555555522222222255555522222555555522222222222255555555555555999999999999999999994444444444444499999999999999999999999999999999999999eeeeeee
        999999999992222222555555555522222222255555522222225552222222222222555555555555559999999999999999999994444444444444449999999999999999999999999999999999999eeeeeee
        999999999992222222225555552222222222555555522222222222222222222225555555555555599999999999999999999994444444444444444999999999999999999999999999999999999eeeeeee
        99999999999222222222222222222222222555555552222222222222222222225555555555555599999999999999999999999444444444444444449999999999999999999999999999999999eeeeeee9
        9999999999922222222222222222222222555555555222222222222222222225555555555555999999999999999999999999444444499444444444499999999999999999999999999999999eeeeeee99
        9999999999995555222222222222222225555555555222222222222222255555555555555559999999999999999999999999444444999994444444444499999999999999999999999999999eeeeeee99
        999999999995555522222222222222225555555555555222222222222555555555555555559999999999999999999999999944444499999944444444444999999999999999999999999999eeeeeeee99
        999999999995555522222222222222255555555555555555555555555555555555555555599999999999999999999999999944444499999994444444444449999999999999999eeeeeeee9eeeeeeee99
        9999999999955555555555555555555555555555555555555555555555555555555555599999999999999999999999999994444449999999994444444444449999999999999eeeeeeeeeeeeeeeeee999
        9999999999995555555555555555555555555555555555555555555555555555555555599999999999999999999999999994444449999999999444444444444999999999999eeeeeeeeeeeeeeeee9999
        9999999999995555555555555555555555555555555555555555555555555555555559999999999999999999999999999994444449999999999994444444444999999999999eeeeeeeeeeeeeeee99999
        9999999999995555555555555555555555555555555555555555555555555555555599999999999999999999999999999994444449999999999999944444444999999999999eeeeeeeeeeeeeeee99999
        9999999999995555555555555555555555555555555555555555555555555555555999999999999999999999999999999994444499999999999999994444444999999999999eeeeeeeeeeeeeee999999
        9999999999999555555555555555555555555555555555555555555555555555559999999999999999999999999999999994444499999999999999999444444999999999999eeeeeeeeeeeeeee999999
        99999999999999555555555555555555555555555555555555555555555555555999999999999999999999999999999999944444999999999999999999999999999999999999eeeeeeeeeeeee9999999
        999999999999999555555555555555555555555555555555555555555555555599999999999999999999999999999999994444449999999999999999999999999999999999999eeeeeeeeeee99999999
        9999999999999999555555555555555555555555555555555555555555555599999999999999999999999999999999999944444499999999999999999999999999999999999999999999999999999999
        9999999999999999995555555555555555555555555555555555555555555599999999999999999999999999999999999944444499999999999999999999999999999999999999999999999999999999
        9999999999999999999555555555555555555555555555555555555555559999999999999999999999999999999999999944444499999999999999999999999999999999999999999999999999999999
        9999999999999999999555555555555555555555555555555555555555999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999999999999
        9999999999999999999955555555555555555555555555555555555559999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999999999999
        9999999999999999999995555555555555555555555555555555555999999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999555555555555555555555555555555559999999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999955555555555555555555555555555559999999999999999999999999999999999999999999444444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999995555555555555555555555555555999999999999999999999999999999999999999999999444444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999555555555555555555555555559999999999999999999999999999999999999999999999444444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999955555555555555555555555599999999999999999999999999999999999999999999999444444999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999995555555555555555555555999999999999999999999999999999999999999999999994444449999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999955555555555555555559999999999999999999999999999999999999999999999994444449999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999995555555555555555999999999999999999999999999999999999999999999999994444449999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999555555555555559999999999999999999999999999999999999999999999999994444449999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999955555555555599999999999999999999999999999999999999999999999999994444499999999999999999999999999999999999999999999999999999999999
        99999999999999aaaaaaaaaaa999999995555555555999999999999999999999999999999999999999999999999999994444499999999999999999999999999999999999999999999999999999999999
        99999999999999aaaaaaaaaaaaa9999995555555999999999999999999977777777777777799999999999999999999994444499999999999999999999999999999999999999999999999999999999999
        99999999999999aaaaaaaaaaaaaa999999999999999999999999999777777777777777777777999999999999999999994444499999999999999944444444444499999999999999999999999999999999
        99999999999999aaaaaaaaaaaaaaaa9999999999999999999999997777777777777777777777799999999999999999944444499999999999994444444444444444999999999999999999999999999999
        99999999999999aaaaaaaaaaaaaaaaaa99999999999999999999997777777777777777777777799999999999999999944444499999999999944444444444444444499999999999999999999999999999
        999999999999999aaaaaaaaaaaaaaaaaa9999999999999999999997777777777777777777777799999999999999999944444499999999994444444444444444444449999999999999999999999999999
        999999999999999aaaaa999aaaaaaaaaa9999999999999999999977777777777999999777777799999999999999999944444499999999944444444444444444444444999999999999999999999999999
        999999999999999aaaaa9999aaaaaaaaa9999999999999999999977777779999999999977777799999999999999999944444999999994444444444449999444444444999999999999999999999999999
        999999999999999aaaaa999999aaaaaaa9999999999999999999977777799999999999997777799999999999999999444444999999944444444444499999944444444999999999999999999999999999
        999999999999999aaaaa9999aaaaaaaaa9999999999999999999777777799999999999997777799999999999999999444444999999944444444449999999999444444999999999999999999999999999
        999999999999999aaaaa99aaaaaaaaaaa9999999999999999999777777999999999999977777799999999999999999444444999999944444444499999999999944444999999999999999999999999999
        999999999999999aaaaaaaaaaaaaaaaaa9999999999999999999777777999999999999977777799999999999999999444444999999944444449999999999999444444999999999999999999999999999
        999999999999999aaaaaaaaaaaaaaaaa99999999999999999999777777999999999999777777799999999999999999444449999999944444499999999999999444444999999999999999999999999999
        999999999999999aaaaaaaaaaaaaaaa999999999999999999999777779999999999997777777799999999999999999444449999999944444999999999999994444444999999999999999999999999999
        999999999999999aaaaaaaaaaaaaa99999999999999999999997777779999999999977777777999999999999999999444449999999999999999999999999444444444999999999999999999999999999
        999999999999999aaaaaaaaaaa99999999999999999999999997777779999999999977777777999999999999999999444449999999999999999999999994444444449999999999999999999999999999
        999999999999999aaaaaaaaa9999999999999999999999999997777779999999997777777779999999999999999999444449999999999999999999999994444444449999999999999999999999999999
        999999999999999aaaaaaaaa9999999999999999999999999997777777777777777777777779999999999999999999444449999999999999999999999944444444499999999999999999999999999999
        999999999999999aaaaaaaaa9999999999999999999999999997777777777777777777777799999999999999999999444449999999999999999999999444444444999999999999999999999999999999
        999999999999999aaaaaaaaaa999999999999999999999999997777777777777777777777999999999999999999999444449999999999999999999994444444499999999999999999999999999999999
        999999999999999aaaaaaaaaa999999999999999999999999997777777777777777777779999999999999999999999444449999999999999999999444444444499999999999999999999999999999999
        999999999999999aaaaaaaaaaa99999999999999999999999997777777777777777777999999999999999999999999444449999999999999999994444444444999999999999999999999999999999999
        999999999999999aaaaaaaaaaaa9999999999999999999999997777777777779999999999999999999999999999999444444499999999999999944444444449999999999999999999999999999999999
        99999999999999aaaaaaaaaaaaaa999999999999999999999997777799999999999999999999999999999999999999444444449999999999999444444444499999999999999999999999999999999999
        99999999999999aaaaaaaaaaaaaaa99999999999999999999997777799999999999999999999999999999999999999444444444999999999994444444444999999999999999999999999999999999999
        99999999999999aaaaaa9aaaaaaaa99999999999999999999977777799999999999999999999999999999999999999444444444999999999444444444499999999999999999999999999999999999999
        99999999999999aaaaaa99aaaaaaaaa999999999999999999977777799999999999999999999999999999999999999444444444449999994444444444999999999999999999999999999999999999999
        99999999999999aaaaa9999aaaaaaaaa99999999999999999977777799999999999999999999999999999999999999999444444444999944444444449999999999999999999999999999999999999999
        99999999999999aaaaa99999aaaaaaaaaa999999999999999977777799999999999999999999999999999999999999999944444444499444444444499999999999999999999999999999999999999999
        99999999999999aaaaa99999aaaaaaaaaaa99999999999999977777999999999999999999999999999999999999999999944444444444444444444999999999999999999999999999999999999999999
        99999999999999aaaaa999999aaaaaaaaaaa9999999999999977777999999999999999999999999999999999999999999994444444444444444499999999999999999999999999999999999999999999
        99999999999999aaaaa99999999aaaaaaaaa9999999999999977777999999999999999999999999999999999999999999999944444444444444999999999999999999999999999999999999999999999
        99999999999999aaaaa999999999aaaaaaaa9999999999999977777999999999999999999999999999999999999999999999994444444444449999999999999999999999999999999999999999999999
        99999999999999aaaaa9999999999aaaaaaa9999999999999977777999999999999999999999999999999999999999999999999444444444499999999999999999999999999999999999999999999999
        99999999999999aaaaa99999999999aaaaaa9999999999999977777999999999999999999999999999999999999999999999999994444444999999999999999999999999999999999999999999999999
        99999999999999aaaaa999999999999999999999999999999977777999999999999999999999999999999999999999999999999999444449999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    music.play(music.stringPlayable("G B A G C5 B A B ", 170), music.PlaybackMode.UntilDone)
    start()
})
forever(function () {
    if (Level == 1) {
        if (controller.left.isPressed()) {
            mySprite.setImage(img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `)
        }
        if (controller.right.isPressed()) {
            mySprite.setImage(img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `)
        }
        if (controller.down.isPressed()) {
            mySprite.setImage(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `)
        }
        if (controller.up.isPressed()) {
            mySprite.setImage(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `)
        }
    } else if (Level == 2) {
        timer.background(function () {
            if (gun_state == 0) {
                Gun.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d . . . . . . . 
                    . . . . . d d d d . . . . . . . 
                    . . . . . b d d b . . . . . . . 
                    . . . . . b d d b . . . . . . . 
                    . . . . . . d d . . . . . . . . 
                    . . . . . . b b . . . . . . . . 
                    . . . . . . b b . . . . . . . . 
                    . . . . . . b f . . . . . . . . 
                    . . . . . . b b . . . . . . . . 
                    . . . . . . b b . . . . . . . . 
                    `)
            } else if (gun_state == 1) {
                Gun.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . c c c . . . . . . . 
                    . . . . . e b b b b b b b b b . 
                    . . . . . . e e d d d d d d d . 
                    . . . . . . c c b f . c d d d . 
                    . . . . . . c c b . . . . . . . 
                    . . . . . . c c b . . . . . . . 
                    . . . . . . c c b . . . . . . . 
                    . . . . . . c c b . . . . . . . 
                    . . . . . . c c b . . . . . . . 
                    `)
            } else {
                Gun.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c . . . . . . 
                    . b b b b b b b b b e . . . . . 
                    . d d d d d d d e e . . . . . . 
                    . d d d c . f b c c . . . . . . 
                    . . . . . . . b c c . . . . . . 
                    . . . . . . . b c c . . . . . . 
                    . . . . . . . b c c . . . . . . 
                    . . . . . . . b c c . . . . . . 
                    . . . . . . . b c c . . . . . . 
                    `)
            }
            if (gun_state > 1) {
                gun_state = 1
            }
            if (gun_state < -1) {
                gun_state = -1
            }
            if (controller.right.isPressed()) {
                gun_state += 1
            }
            if (controller.left.isPressed()) {
                gun_state += -1
            }
        })
    }
    if (spriteutils.distanceBetween(mySprite, GunNPC) <= 28 && controller.B.isPressed()) {
        text_list = [
        "Hey!",
        "do you have any interest in guns?",
        "Oh, I see, why would you need them? ",
        "It is a dangerous world out there,",
        "You would need them to get out of this city."
        ]
        game.setDialogFrame(img`
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            `)
        for (let value of text_list) {
            game.showLongText(value, DialogLayout.Bottom)
        }
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 b c 4 
            4 4 f 6 6 6 6 6 6 f b 4 
            . . . f f f f f f . b . 
            . . . f f . . f f . . . 
            `)
        GunAcquired = 1
        text_list = ["You got a gun!", "Use it when fighting."]
        game.setDialogFrame(img`
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbb
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeee
            `)
        for (let value of text_list) {
            game.showLongText(value, DialogLayout.Bottom)
        }
    }
})
