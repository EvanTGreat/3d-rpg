function start () {
    music.play(music.createSong(hex`00b4000408060900001c00010a006400f40164000004000000000000000000000000000500000424000c001000012a20002400012a30003400012a44004800012a58005c00012a68006c00012a01001c000f05001202c102c20100040500280000006400280003140006020004480044004800012448004c00012050005400012454005800012458005c0001245c006000012064006800012468006c0001246c007000012470007400012078007c0001247c008000011903001c0001dc00690000045e0100040000000000000000000005640001040003540008000c00011910001400011918001c00011920002400011928002c00011930003400011938003c00011940004400011948004c00011950005400011958005c00011960006400011968006c00011970007400011904001c00100500640000041e000004000000000000000000000000000a0400045a0040004400010844004800010848004c0001084c005000010d50005400010854005800010858005c0001085c006000010d60006400010864006800010868006c0001086c007000010d70007400010874007800010878007c00010805001c000f0a006400f4010a00000400000000000000000000000000000000026c0008000c00010d0c001000011410001400010a14002000011124002800010d28002c0001142c003000010a30003c00011140004400010d44004800011448004c00010a4c00580001115c006000010d60006400011464006800010a68007400011178007c00010d7c008000011406001c00010a006400f401640000040000000000000000000000000000000002900008000c00011d0c001000012c1000140001191400180001241c00200001192400280001222c003000011930003400012c34003800011940004400011d44004800012c48004c0001194c00500001245400580001195c006000012264006800011968006c00012c6c007000011994009800011998009c00012c9c00a0000119a000a400012ca400a8000119a800ac00012407001c00020a006400f4016400000400000000000000000000000000000000033c0008000c00012010001400011d1c002000011d2c003000011d34003800011d40004400012048004c00011d54005800011d64006800011d6c007000011d08001c000e050046006603320000040a002d0000006400140001320002010002440060006400011164006800011868006c00010c6c007800010880008400012c88008c0001058c0090000105b000b400020a27b400b800010ab800bc00020a2cbc00c000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006b0104000500010c08000900010c0c000d00010c10001100010c14001500010c18001900010c1c001d00010c20002100010c24002500010c28002900010c2c002d00010c30003100010c34003500010c38003900010c3c003d00010c40004100040c13141744004500010c48004900010c4c004d00010c50005100040c13141754005500040c13141758005900040c1314175c005d00010c60006100010c64006500010c68006900010c6c006d00010c70007100010c74007500010c78007900010c7c007d00010c80008100010c84008500010c88008900010c8c008d00010c90009100010c94009500180c0d0e0f1011121314151617000102030405060708090a0b98009900180c0d0e0f1011121314151617000102030405060708090a0b9c009d00010ca000a100010ca400a500010ca800a900010cac00ad00180c0d0e0f1011121314151617000102030405060708090a0bb000b100010cb400b500010cb800b900010cbc00bd00010c`), music.PlaybackMode.LoopingInBackground)
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
}
let mySprite: Sprite = null
music.play(music.createSong(hex`00b4000408020205001c000f0a006400f4010a0000040000000000000000000000000000000002120010001400010514001800010624002800011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006000040005000b0c0d0e0f1011120001020b080009000b0c0d0e0f1011120001020b1c001d000b0c0d0e0f1011120001020b2c002d000b0c0d0e0f1011120001020b300031000b0c0d0e0f1011120001020b340035000b0c0d0e0f1011120001020b`), music.PlaybackMode.LoopingInBackground)
let text_list = [
"50 years,",
"3 communities,",
"1 goal,",
"be the best.",
"conquer the world-",
"are you ready for it",
"-Taylor Swift"
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
