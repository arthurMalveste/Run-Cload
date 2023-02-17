sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Arquivo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f . . . . . . . . . . . 
        f 4 4 4 4 f f f f f f f f f f . 
        f 4 4 4 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
        f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Arquivo.setPosition(randint(80, 210), randint(80, 210))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(Nuvem, effects.spray, 300)
    info.changeScoreBy(0)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Arquivo, effects.spray, 300)
    info.changeScoreBy(10)
})
let Nuvem: Sprite = null
let Arquivo: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Arquivo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f . . . . . . . . . . . 
    f 4 4 4 4 f f f f f f f f f f . 
    f 4 4 4 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
    f 5 5 5 8 8 8 8 8 8 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    f 5 5 5 8 8 5 5 5 5 8 8 5 5 5 f 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let Virus = sprites.create(img`
    . . . . . . . . . 7 7 . . . . . 
    . 7 7 . . . . . 7 7 . . 7 7 . . 
    . . . 7 7 7 . 7 7 . . 7 7 . . . 
    . . . . . 7 . 7 . . 7 . . . . . 
    . 7 . . . 7 . 7 . . 7 . . . . . 
    . . 7 . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . 7 7 7 7 7 7 . . . 7 7 
    . 7 7 7 . 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 . 7 7 . . 
    . . . . . 7 7 7 7 7 7 . . 7 7 7 
    . . . 7 7 7 . 7 . 7 7 7 . . . . 
    . . 7 7 . . . 7 . . 7 7 7 . . . 
    . . . . . . 7 . . . . . 7 7 7 . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Nuvem = sprites.create(img`
    .........bbbb...........
    .......bb1111bb.........
    ......bb111111bbbbb.....
    ......b1111111ddd11b....
    ......b11111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d11111111111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111d11111dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    `, SpriteKind.Player)
Nuvem.setPosition(75, 60)
scene.cameraFollowSprite(Nuvem)
info.setScore(0)
Arquivo.setPosition(randint(80, 180), randint(80, 180))
Virus.setPosition(randint(80, 180), randint(80, 180))
controller.moveSprite(Nuvem)
forever(function () {
    animation.runMovementAnimation(
    Virus,
    animation.animationPresets(animation.shake),
    800,
    true
    )
    Arquivo.setVelocity(randint(-20, 20), randint(-20, 20))
    Virus.follow(Nuvem, 50)
    if (info.score() == 50) {
        game.gameOver(true)
    }
})
