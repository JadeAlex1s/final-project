namespace SpriteKind {
    export const MODEL = SpriteKind.create()
    export const WALL = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (true) {
        pause(100)
        THROW_ROCK.controlWithArrowKeys(true)
        THROW_ROCK.angle = 6
        THROW_ROCK.angleRate += 10
        THROW_ROCK.throwDart()
        THROW_ROCK.angle = 6
        THROW_ROCK.angleRate += 10
        THROW_ROCK.throwDart()
        THROW_ROCK.angle = 0
    }
})
function Intro2 () {
    if (RESPONSE1 == 1) {
        _1 = sprites.create(img`
            ...4444.......4444.......4444...
            ...4444.......4444.......4444...
            ...4444.......4444.......4444...
            ...445544...44555544...445544...
            ...445544...44555544...445544...
            ...44555544455555555444555544...
            ...44555544455555555444555544...
            ...44555555555555555555555544...
            ...44555555555555555555555544...
            ...44555555555555555555555544...
            ...44444444444444444444444444...
            ...44444444444444444444444444...
            ...ff5588999885588888889988ff...
            ...ff5588999885588888889988ff...
            fff88448899988558888888998888ff.
            fff88448899988558888888998888ff.
            fff88444444455888888888888888ff.
            fff88444444455888888888888888ff.
            fff88444444455888888888888888ff.
            fff88444444455888888888888888ff.
            fff4488ffffffffffffffffffff88ff.
            fff4488ffffffffffffffffffff88ff.
            fff4488ff33333ff8888888888888ff.
            fff4488ff33333ff8888888888888ff.
            4448888fffffffff8888888888888ff.
            4448888fffffffff8888888888888ff.
            4448888fffffffff8888888888888ff.
            fffff8888888888888888888888ffff.
            fffff8888888888888888888888ffff.
            ...ffffffffffffffffffffffffff...
            ...ffffffffffffffffffffffffff...
            ................................
            `, SpriteKind.Player)
        _1.setPosition(14, 103)
    } else if (RESPONSE1 == 2) {
        _2 = sprites.create(img`
            ....ffffffffffffffffffff........
            ....ffffffffffffffffffff........
            ....ffffffffffffffffffff........
            ..fffff11111111111111ffffffff...
            ..fffff11111111111111ffffffff...
            ffff1111111111111111111111fffff.
            ffff1111111111111111111111fffff.
            ffff1111111111111111111111fffff.
            ff111111111111111111111111111fff
            ff111111111111111111111111111fff
            ff11111111115555555551111111111f
            ff11111111115555555551111111111f
            ff11111111115555555551111111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff11111115555555555555551111111f
            ff111111111155555555511111111fff
            ff111111111155555555511111111fff
            ff111111111111111111111111fffff.
            ff111111111111111111111111fffff.
            ff111111111111111111111111fffff.
            ffff11111111111111111111fffff...
            ffff11111111111111111111fffff...
            ..fffffff111111111111fffff......
            ..fffffff111111111111fffff......
            ..fffffff111111111111fffff......
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            `, SpriteKind.Player)
        _2.setPosition(14, 103)
    } else if (RESPONSE1 == 3) {
        _3 = sprites.create(img`
            ................................
            .............ffffff.............
            .............ffffff.............
            .............ffffff.............
            ........fffff1111fffffff........
            ........fffff1111fffffff........
            ........fffff1111fffffff........
            ......ffff11111111111fffffff....
            ......ffff11111111111fffffff....
            ......ffff11111111111fffffff....
            ....ffff111111111111111111ffff..
            ....ffff111111111111111111ffff..
            ..ffff1111111111111111111111ffff
            ..ffff1111111111111111111111ffff
            ..ffff1111111111111111111111ffff
            ffff1111ff11111111111111ff1111ff
            ffff1111ff11111111111111ff1111ff
            ffff1111ff11111111111111ff1111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ffff111111111ffffffff111111111ff
            ffff111111111ffffffff111111111ff
            ffff111111111ffffffff111111111ff
            ..ffffffff1111111111111111ffff..
            ..ffffffff1111111111111111ffff..
            ..ffffffff1111111111111111ffff..
            ........ffffffffffffffffff......
            ........ffffffffffffffffff......
            ................................
            `, SpriteKind.Player)
        _3.setPosition(14, 103)
    } else if (RESPONSE1 == 4) {
        _4 = sprites.create(img`
            ................................
            ................................
            .....fffffffffffffffffffff......
            .....fffffffffffffffffffff......
            .....fffffffffffffffffffff......
            fffffff6666666666666666fffff....
            fffffff6666666666666666fffff....
            fffffff6666666666666666fffff....
            fff6666666666666666666666666ff..
            fff6666666666666666666666666ff..
            fff6666666666666666666666666ff..
            fff6666fffff666666666fffff66ff..
            fff6666fffff666666666fffff66ff..
            fff6666fff11666666666ff11166ffff
            fff6666fff11666666666ff11166ffff
            fff6666fff11666666666ff11166ffff
            fff666666666664444466666666666ff
            fff666666666664444466666666666ff
            fff666666666664444466666666666ff
            fff66ff6666666664444466666ff66ff
            fff66ff6666666664444466666ff66ff
            fff666666666666666644446666666ff
            fff666666666666666644446666666ff
            fff666666666666666644446666666ff
            fffff66666ff6666fff6666fff66ffff
            fffff66666ff6666fff6666fff66ffff
            fffff66666ff6666fff6666fff66ffff
            ...fffffffffffffffffffffffffff..
            ...fffffffffffffffffffffffffff..
            ................................
            ................................
            ................................
            `, SpriteKind.Player)
        _4.setPosition(14, 103)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.WALL, function (sprite, otherSprite) {
    THROW_ROCK.destroy(effects.coolRadial, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let ENEMY_1: Sprite = null
    ENEMY_1.destroy(effects.coolRadial, 500)
    info.changeLifeBy(-1)
})
function INTRO_AVATAR () {
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffff1ffffffffffffffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffff1fff1ffffffffffffffffffffffffffffffff111ffffffffff11ffffffffffffffffffffffff1ffffffffffffffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffff111ffffffffffffff1ffffffffffffffffffffffff1fffffffffff1ffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffff1fffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffff1fffffffffff1ffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffff1ffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1ffffffffffff1ffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffff1fffffffffff111fffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffff1111111111111fffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffff111ffff1fffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffff1fff11ff1fffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1fffffffffffffffffffffffffff1ffff1ff1ffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffff1ffffffffffffffffffffffffffff1ffff1f1ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff11fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1f11ffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    AVATAR1 = sprites.create(img`
        ...4444.......4444.......4444...
        ...4444.......4444.......4444...
        ...4444.......4444.......4444...
        ...445544...44555544...445544...
        ...445544...44555544...445544...
        ...44555544455555555444555544...
        ...44555544455555555444555544...
        ...44555555555555555555555544...
        ...44555555555555555555555544...
        ...44555555555555555555555544...
        ...44444444444444444444444444...
        ...44444444444444444444444444...
        ...ff5588999885588888889988ff...
        ...ff5588999885588888889988ff...
        fff88448899988558888888998888ff.
        fff88448899988558888888998888ff.
        fff88444444455888888888888888ff.
        fff88444444455888888888888888ff.
        fff88444444455888888888888888ff.
        fff88444444455888888888888888ff.
        fff4488ffffffffffffffffffff88ff.
        fff4488ffffffffffffffffffff88ff.
        fff4488ff33333ff8888888888888ff.
        fff4488ff33333ff8888888888888ff.
        4448888fffffffff8888888888888ff.
        4448888fffffffff8888888888888ff.
        4448888fffffffff8888888888888ff.
        fffff8888888888888888888888ffff.
        fffff8888888888888888888888ffff.
        ...ffffffffffffffffffffffffff...
        ...ffffffffffffffffffffffffff...
        ................................
        `, SpriteKind.MODEL)
    AVATAR2 = sprites.create(img`
        ....ffffffffffffffffffff........
        ....ffffffffffffffffffff........
        ....ffffffffffffffffffff........
        ..fffff11111111111111ffffffff...
        ..fffff11111111111111ffffffff...
        ffff1111111111111111111111fffff.
        ffff1111111111111111111111fffff.
        ffff1111111111111111111111fffff.
        ff111111111111111111111111111fff
        ff111111111111111111111111111fff
        ff11111111115555555551111111111f
        ff11111111115555555551111111111f
        ff11111111115555555551111111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff11111115555555555555551111111f
        ff111111111155555555511111111fff
        ff111111111155555555511111111fff
        ff111111111111111111111111fffff.
        ff111111111111111111111111fffff.
        ff111111111111111111111111fffff.
        ffff11111111111111111111fffff...
        ffff11111111111111111111fffff...
        ..fffffff111111111111fffff......
        ..fffffff111111111111fffff......
        ..fffffff111111111111fffff......
        .......fffffffffffffffff........
        .......fffffffffffffffff........
        `, SpriteKind.MODEL)
    AVATAR3 = sprites.create(img`
        ................................
        .............ffffff.............
        .............ffffff.............
        .............ffffff.............
        ........fffff1111fffffff........
        ........fffff1111fffffff........
        ........fffff1111fffffff........
        ......ffff11111111111fffffff....
        ......ffff11111111111fffffff....
        ......ffff11111111111fffffff....
        ....ffff111111111111111111ffff..
        ....ffff111111111111111111ffff..
        ..ffff1111111111111111111111ffff
        ..ffff1111111111111111111111ffff
        ..ffff1111111111111111111111ffff
        ffff1111ff11111111111111ff1111ff
        ffff1111ff11111111111111ff1111ff
        ffff1111ff11111111111111ff1111ff
        ff1111111111111111111111111111ff
        ff1111111111111111111111111111ff
        ff1111111111111111111111111111ff
        ff1111111111111111111111111111ff
        ff1111111111111111111111111111ff
        ffff111111111ffffffff111111111ff
        ffff111111111ffffffff111111111ff
        ffff111111111ffffffff111111111ff
        ..ffffffff1111111111111111ffff..
        ..ffffffff1111111111111111ffff..
        ..ffffffff1111111111111111ffff..
        ........ffffffffffffffffff......
        ........ffffffffffffffffff......
        ................................
        `, SpriteKind.MODEL)
    AVATAR4 = sprites.create(img`
        ................................
        ................................
        .....fffffffffffffffffffff......
        .....fffffffffffffffffffff......
        .....fffffffffffffffffffff......
        fffffff6666666666666666fffff....
        fffffff6666666666666666fffff....
        fffffff6666666666666666fffff....
        fff6666666666666666666666666ff..
        fff6666666666666666666666666ff..
        fff6666666666666666666666666ff..
        fff6666fffff666666666fffff66ff..
        fff6666fffff666666666fffff66ff..
        fff6666fff11666666666ff11166ffff
        fff6666fff11666666666ff11166ffff
        fff6666fff11666666666ff11166ffff
        fff666666666664444466666666666ff
        fff666666666664444466666666666ff
        fff666666666664444466666666666ff
        fff66ff6666666664444466666ff66ff
        fff66ff6666666664444466666ff66ff
        fff666666666666666644446666666ff
        fff666666666666666644446666666ff
        fff666666666666666644446666666ff
        fffff66666ff6666fff6666fff66ffff
        fffff66666ff6666fff6666fff66ffff
        fffff66666ff6666fff6666fff66ffff
        ...fffffffffffffffffffffffffff..
        ...fffffffffffffffffffffffffff..
        ................................
        ................................
        ................................
        `, SpriteKind.MODEL)
    AVATAR1.setPosition(24, 98)
    AVATAR2.setPosition(62, 99)
    AVATAR3.setPosition(96, 98)
    AVATAR4.setPosition(135, 98)
}
let AVATAR4: Sprite = null
let AVATAR3: Sprite = null
let AVATAR2: Sprite = null
let AVATAR1: Sprite = null
let THROW_ROCK: Dart = null
let RESPONSE1 = 0
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
game.showLongText("Hello and welcome to BubblePop", DialogLayout.Bottom)
INTRO_AVATAR()
game.showLongText("Pick an Avatar", DialogLayout.Top)
RESPONSE1 = game.askForNumber("Pick a number 1-4", 1)
Intro2()
sprites.destroyAllSpritesOfKind(SpriteKind.MODEL)
pause(200)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111
    9999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    9999999999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    9999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111
    9999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111
    9999999999911111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111
    9999999991111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999999991111111111111111119999999111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9991111111111111111111111119911111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9991111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9991111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999911111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111
    9999911111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111
    9999911111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111
    9999911111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111
    9999911111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111
    9999999991111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999991111119999999999999991111111999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111199999991111111111111199999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119111111111111111111119999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111199999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111119999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999bbbbbbbbbbbbbbbbbb99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999bbbbbbbbbbbbbbbbbb99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111119999999999999bbbbbbbbbbbbbbbbbb99999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111119999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111119111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9111111111119999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9111991111999999999991111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111119999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999991111111111999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999991111111111111119999999999999999999999
    99999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbb9999999999999999999999999991111119999999991111111111111111111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111999991111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111199999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.showLongText("LEVEL 1", DialogLayout.Top)
let mySprite5 = sprites.create(img`
    ...9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................................................................................................................................................9
    ...............................999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `, SpriteKind.WALL)
for (let index = 0; index < 6; index++) {
    THROW_ROCK = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . d . . . . . . 
        . . . . . . . . d d d d . . . . 
        . . . . . . . d d d d d d . . . 
        . . . . . d d d d d d d d . . . 
        . . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . d d d d d d d d d d d . . . 
        . . d d d d d d d d d d d . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d d . . . . 
        . . d d d d d d d d d . . . . . 
        . . d d d d d d d d . . . . . . 
        . . d d d d d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, 10, 110)
}
THROW_ROCK.setStayInScreen(true)
THROW_ROCK.setTrace(true)
info.setLife(5)
