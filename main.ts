namespace SpriteKind {
    export const MODEL = SpriteKind.create()
    export const WALL = SpriteKind.create()
    export const BLUE1 = SpriteKind.create()
    export const TEAM = SpriteKind.create()
    export const GREEN = SpriteKind.create()
    export const RedLIFE = SpriteKind.create()
    export const RED2 = SpriteKind.create()
    export const BLUE2 = SpriteKind.create()
    export const BLUE3 = SpriteKind.create()
    export const Teammate = SpriteKind.create()
}
function LEVEL3_BOSS () {
    GREEN_ENEMY = sprites.create(img`
        ....ff................ff........
        ....ff...............fff........
        .....ff............fffff........
        .....fff..........fffff.........
        .....fff5555555555ffff..........
        ......fff777777777ffff55........
        .......55777777777777755........
        .......571111111177777755.......
        .......711111111117777775.......
        .......111111115517777775.......
        .......111111111511777775.......
        .......111fff1114117777755......
        .......111fff11141177777577.....
        .......111ffff11111777775777....
        .......11fffff11111777775777....
        .......11ffff115115777775777....
        .......111fff114155777775777....
        .......551111111557777775777....
        .......755555555577777775777....
        .......777777777777777775577....
        .......777777777777777775557....
        .......77f1fff1fff7777775557....
        .......7fffffffffff77777555.....
        .......7ff7777777ff7777755......
        .......777777777777777775.......
        .......777777777777777775.......
        .......7777777...77777775.......
        .......5577777...77777755.......
        ........577777...7777775........
        ........55577.....777755........
        ..........555.....75555.........
        ................................
        `, SpriteKind.GREEN)
    GREEN_ENEMY.setVelocity(80, 70)
    GREEN_ENEMY.setPosition(75, 66)
    GREEN_ENEMY.setBounceOnWall(true)
    info.setLife(5)
    return 0
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    while (true) {
        THROW_ROCK.controlWithArrowKeys(true)
        THROW_ROCK.setTrace(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    THROW_ROCK.throwDart()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BLUE2, function (sprite, otherSprite) {
    BLUE2.destroy(effects.rings, 500)
    pause(100)
    info.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BLUE3, function (sprite, otherSprite) {
    BLUE3.destroy(effects.rings, 500)
    pause(100)
    info.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BLUE1, function (sprite, otherSprite) {
    BLUE_TEAMMATE.destroy(effects.rings, 500)
    pause(100)
    info.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Teammate, function (sprite, otherSprite) {
    PURPLE_TEAMMATE.destroy()
    info.changeScoreBy(-2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.GREEN, function (sprite, otherSprite) {
    GREEN_ENEMY.destroy(effects.trail, 500)
    info.changeScoreBy(8)
})
function LEVEL2_ENCOUNTER () {
    if (true) {
        BLUE_TEAMMATE = sprites.create(img`
            .......11155555555......111.....
            .......1155......5555551111.....
            ........55............5111......
            .........555555666655551........
            ..........6688555555666.........
            ...1.....888888888888666........
            ........8888888888888866...1....
            ........81111111188888866.......
            .......811111111118888886.......
            .......11111111dd18888886.....1.
            .......1111ff111d11888886.......
            .....1.111fff111d118888866......
            .......111ffff11d1188888688.....
            .......111ffff11111888886888....
            .1.....111fff111111888886888....
            .......11111111d116888886888....
            .......11111111d166888886888....
            .......661111111668888886888..1.
            .....1.866666666688888886888....
            .......888888888888888886688....
            .......888222222288888886668....
            .......882222332288888886668....
            .......88822333288888888666.....
            .......8888888888888888866......
            .......888888888888888886....1..
            ....1..8888888888888888861......
            .......8888888...88888886.......
            .......6688888...88888866.......
            ........688888...8888886........
            ........66688.....888866.....1..
            ..........666.....86666.........
            ................................
            `, SpriteKind.BLUE1)
        RED_3.setPosition(146, 83)
    }
    if (true) {
        BLUE2 = sprites.create(img`
            ................................
            ................................
            ................................
            ..........111555555.....11......
            ..........115.....55555111......
            ...........55.........511.......
            ............555556665551........
            .............6885555566.........
            .......1....888888888666........
            ...........8888888888866..1.....
            ..........811111111888886.......
            ..........1111111d1888886.......
            ..........111ff11d1188886.......
            ..........111ff11d1188886.......
            ..........111fff1d11888868......
            ..........111fff11118888688.....
            .....1....111ff111118888688.....
            ..........11111111668888688.....
            ..........66111116688888688.....
            ..........86666666888888688.....
            ..........88888888888888688.....
            ..........88822222888888668.....
            ..........88222332888888668.....
            ..........8882333888888866......
            ..........888888888888886...1...
            ........1.888888888888886.......
            ..........888888..8888886.......
            ..........668888..8888866.......
            ...........68888..888886........
            ...........6688....88866....1...
            ................................
            ................................
            `, SpriteKind.BLUE2)
        BLUE2.setPosition(138, 19)
    }
    if (true) {
        BLUE3 = sprites.create(img`
            ................................
            ................................
            ................................
            ..........111555555.....11......
            ..........115.....55555111......
            ...........55.........511.......
            ............555556665551........
            .............6885555566.........
            .......1....888888888666........
            ...........8888888888866..1.....
            ..........811111111888886.......
            ..........1111111d1888886.......
            ..........111ff11d1188886.......
            ..........111ff11d1188886.......
            ..........111fff1d11888868......
            ..........111fff11118888688.....
            .....1....111ff111118888688.....
            ..........11111111668888688.....
            ..........66111116688888688.....
            ..........86666666888888688.....
            ..........88888888888888688.....
            ..........88822222888888668.....
            ..........88222332888888668.....
            ..........8882333888888866......
            ..........888888888888886...1...
            ........1.888888888888886.......
            ..........888888..8888886.......
            ..........668888..8888866.......
            ...........68888..888886........
            ...........6688....88866....1...
            ................................
            ................................
            `, SpriteKind.BLUE3)
        BLUE3.setPosition(102, 97)
    }
    if (true) {
        PURPLE_TEAMMATE = sprites.create(img`
            ....................................
            ....................................
            ....................................
            ....................................
            ....................................
            ...........3333333333333............
            ..........33aaaaaaaaaaaa33..........
            ..........33aaaaaaaabaaa33..........
            ..........3a11111111baaaa33.........
            ..........a111111111baaaaa3.........
            ..........a111111111bbaaaa3.........
            ..........11111111131baaaa3.........
            ..........111111111b1aaaaa33........
            ..........111111111b1aaaaa3bb.......
            ..........11111111111aaaaa3ab.......
            ..........11111111111aaaaa3aa.......
            ..........11111111313aaaaa3aa.......
            ..........11111111b13aaaab3aa.......
            ..........3311111113aaaaab3aa.......
            ..........a333333333aaaaab3aa.......
            ..........aaaaaaaaaaaaaaab33a.......
            ..........aaaaaaaaaaaaaaab33a.......
            ..........aaaaaaaaaaaaaabb333.......
            ..........aaaaaaaaaaaaaabb333.......
            ..........aaaaaaaaaaaaaabb33........
            ..........aaaaaaaaaaaaabbb3.........
            ..........bbaaaaaaaaaaabbb3.........
            ..........bbbaaaa...aaabbb3.........
            ..........33baaaa...aabbb33.........
            ...........3bbaa3...aabbb3..........
            ...........333aa3...3abb33..........
            .............333....33333...........
            ....................................
            ....................................
            ....................................
            ....................................
            `, SpriteKind.Teammate)
        PURPLE_TEAMMATE.setPosition(75, 66)
    }
    return 0
}
function ENEMY_ENCOUNTER () {
    if (true) {
        RED_Enemy = sprites.create(img`
            ................................
            ................................
            ................................
            ...........4444444444...........
            ..........4422222222444.........
            .........222222222f22444........
            ........2f222222ff222244........
            ........21f11ffff22222244.......
            .......211fff111112222224.......
            .......11111111dd12222224.......
            .......111111111d11222224.......
            .......1111ff111d112222244......
            .......111fff111d1122222422.....
            .......111fff111111222224222....
            .......111fff111111222224222....
            .......111fff11d114222224222....
            .......11111111d144222224222....
            .......441111111442222224222....
            .......244444444422222224222....
            .......222222222222222224422....
            .......222222222222222224442....
            .......2ffff2fff222222224442....
            .......2f22fff2ff2222222444.....
            .......2222222222222222244......
            .......222222222222222224.......
            .......222222222222222224.......
            .......2222222...22222224.......
            .......4422222...22222244.......
            ........422222...2222224........
            ........44422.....222244........
            ..........444.....24444.........
            ................................
            `, SpriteKind.Enemy)
        RED_Enemy.setPosition(83, 27)
    }
    return 0
}
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
function OFFICAL_LEVEL_2 () {
    pause(5000)
    pause(5000)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffff1111111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffff11111111111fffffffffffffff
        fffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111fffffffffffff
        fffffffffffffffff1177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffffff111ff
        fffffffffffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111ffffff111ff
        fffffff1fffffffff767611111111ffffffffffffffffffffff111fffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111ffffff111ff
        ffffffffffffffff11111111111111f111111111111ffffffff111fffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffff
        ffffffffffffffff11111111111111111111111111111ffffff111fffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffff
        ffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffff
        fffffffffffffff111111111111111111111111111111111fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffff
        ffffffffffffff11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111ffffffffff
        ffffffffffffff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff11111111111111111111111111111ffffffffff
        ffffffffffffff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffff
        ffffffffffffff111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111fffffffffff
        ffffff1fffffff1111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffff
        fffffffffffffff111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffff
        ffffffffffffff1111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffff
        ffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffff
        ffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffff
        ffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffff
        ffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111fffff1ffff
        ffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffff
        ffffffffffff1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffff
        ffffffffffff1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffff
        fffffffffffff111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffff
        fffffffffffffff1111111111111111111111111111111111111ffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111fffffffffffff
        fffffffffffffffff11111111111111111111111111111111fffffff111fffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff111111111111111111111111111ffffffffffffff
        fffffffffffffffff11111111111111111111111111fffffffffffff111ffffffffffff1ffffffffffff111fffffffffffffffffffffffffffffffff11111111fffff111111111111fffffffffffffff
        fffffffffffffffffff11111111111111111111111ffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffff111fffffffffffffffffffff111111111111fffffffffffffff
        fffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffff11111111111ffffffffffffffff
        fffffffffffffffffff111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffff1111111111fffffffffffffffff
        fffff111fffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffff
        fffff111fffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111fffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff1fffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff888fff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111fffffffffffff811fff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111ffffffffffff8888fff11111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111ffffffffffff8888fff111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff868111111111111111111111111111111111fffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff11fffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffff111fffffffffff1fffffffffffffffffffffffffffffffffffffffff
        ffffffff1ffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1fffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff111fffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff111fffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff111fffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffff1ffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffff
        ffff111ffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffff
        ffff111fffffffffffffffffffffff1fffffffffffffff111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff111111111111111ffffffffffffffffff
        ffff111ffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111f111111ffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff1111111111111f111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffff44ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffff11111111111111fffffffffffffffffffffffff111fffffffffffffff11111111111111111111111111111444ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffff111fffffffffffff1111111111111111111111111111111411ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffff111ffffffffffff11111111111111111111111111111111444ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111464ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111fffffffff
        fff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        ffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffffff11111f11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffff111
        ffffffff1111111111111111111111111111ffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffff111
        ffffffff11111111111111111111111111111ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffff111
        fffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffff1111111111111111111111111111111fffffffffffffffff111ffffffffffffffffffff111ffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffff1111111111111111111111111111111fffffffffffffffff111ffffffffffffffffffff111fffffffffffffff1ffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffff1111111111111111111111111111111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        fffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111fffffff
        ffffff11111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffff
        fffff111111111111111111111111111111111ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111ffffffffffff
        fffff111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111ffffffffffff
        fffff111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffff
        ffff1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111fffffffffffff
        ffff1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111ffffffffffffff
        fff11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111ffffffffffffffff
        fff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffffffffff
        fff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffff
        fff11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffff
        fff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffff
        ffff1111111111111111111111111111111111ffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1ffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    if (info.score() >= 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.RED2, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.RedLIFE, effects.spray, 500)
        info.setScore(0)
        pause(500)
        game.showLongText("LEVEL 2", DialogLayout.Top)
        game.showLongText("Destroy the enemy", DialogLayout.Top)
        game.showLongText("Not the purple Teammates", DialogLayout.Top)
        LEVEL2_ENCOUNTER()
    }
    pause(5000)
    pause(5000)
    pause(5000)
    pause(5000)
    return 0
}
function OFFICAL_LEVEL3 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.BLUE1, effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.BLUE2, effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.BLUE3, effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Teammate, effects.spray, 500)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222ffffff
        fffffffffffffffff444444444ffffffffffffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222ffffff
        ffffffffffffffff4fffffffff4ffffffffffffffffffff4fffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222fffff
        fffffffffffffff4fffffffffff4ffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffff
        ffffffffffffff4fffffffffffff4ffffffffffffffff4ffffffffffffffa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffff
        fffffffffffff4fffffffffffffff4fffffffffffffff4fffffffffffffaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffff
        fffffffffffff4fffffffffffffff4fffffffffffffff4ffffffffffffaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222fff
        fffffffffffff4fffffffffffffff4fffffffffffffff4fffffffffffaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222fff
        fffffffffffff4ffffffffffffffa4fffffffffffffff4fffffffffaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222111111111112222222222222222222fff
        fffffffffffff4ffffffffffffaaa4fffffffffffffff4ffffffffaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22211111111111111122222222222222222fff
        fffffffffffff4ffffffffffaaaaa4fffffffffffffff4fffffffaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22111111111111111112222222222222222fff
        fffffffffffff4ffffffffaaaaaaa4fffffffffffffff4ffffffaaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21111111111111111111222222222222222fff
        fffffffffffff4ffffffaaaaaaaaa4fffffffffffffff4ffffaaaaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111122222222222222fff
        fffffffffffff4ffffaaaaaaaaaaa4ffffffffffffffff4faaaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111112222222222222fff
        ffffffffffffff4ffaaaaaaaaaaa4ffffffffffffffffffaaaaaaaaaaaa4fffffffffffffffffffffffff444444444ffffffffffffffffffffffffffff11111111111111111111111222222222222fff
        fffffffffffffff4aaaaaaaaaaa4ffffffffffffffffffff4aaaaaaaaa4fffffffffffffffffffffffff4fffffffff4fffffffffffffffffffffffffff11111111111111111111111222222222222fff
        ffffffffffffffff4aaaaaaaaa4ffffffffffffffffffffff444444444fffffffffffffffffffffffff4fffffffffff4ffffffffffffffffffffffffff11111111111111111111111122222222222fff
        fffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffff111111111111111111111112222222222ffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffff111111111111111111111112222222222ffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffff111111111111111111111112222222222ffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4ffffffffffffffffffffffffff1111111111111111111111222222222fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffff11111111111111111111122222222ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffff11111111111111111111122222222ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffff4ffffffffffffffffffffffffffff111111111111111111112222222fffffff
        fffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffaa4fffffffffffffffffffffffffffff1111111111111111111222222ffffffff
        ffffffffffffffffffffffff4fffffff4ffffffffffffffffffffffffffffff44444fffffffffffff4fffffffffffaaaa4ffffffffffffffffffffffffffffff11111111111111111122222fffffffff
        fffffffffffffffffffffff4fffffffff4fffffffffffffffffffffffffffff4aaa4fffffffffffff4ffffffffaaaaaaa4ffffffffffffffffffffffffffffffff1111111111111111222fffffffffff
        ffffffffffffffffffffff4fffffffffff4ffffffffffffffffffffffffffff4aaa4ffffffffffffff4fffffaaaaaaaa4ffffffffffffffffffffffffffffffffff11111111111111222ffffffffffff
        ffffffffffffffffffffff4fffffffffff4ffffffffffffffffffffffffffff4aaa4fffffffffffffff4ffaaaaaaaaa4ffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffff
        ffffffffffffffffffffff4fffffffffaa4ffffffffffffffffffffffffffff44444ffffffffffffffff4aaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff4fffffffaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff4ffffffaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff4fffffaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff4fffaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff4faaaaaaaa4ffffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff4aaaaaaa4fffffff44fffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff4444444fffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffffaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffffffffaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffff4ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4ffffffffffaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffff4fffffffffffffffff
        fffffffffffffffffffffffffffffffffffff4fffffffaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffff4ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff4ffffaaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffff4fffffffffff4ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff4ffaaaaaaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffff4fffffffffffffff4fffffffffff4ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4aaaaaaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffff4ffffffffffffff4fffffffffff4ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff44aaaaaaaaa44ffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffff4fffffffffffff4fffffffffaa4ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffff4fffffffffffff4fffffaaaaaa4ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffff4fffffffffffff4ffaaaaaaaaa4ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffaaffffffffffffff4aaaaaaaaa4fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffaaa4fffffffffffffff4aaaaaaa4ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffaaaaa4ffffffffffffffff4444444fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffff4ffffaaaaaaa4ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff44ffffffffffffffffffff4aaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffff4fffffffffff4ffffffffffffffffffff4aaaaaaa4ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff4fffffffff4fffffffffffffffffffffffffffffffffffffffffff4fffffffffff4fffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4fffffffffff4fffffffffffffffffffffffffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffffaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffff4fffffffffaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4fffffffffffffff4fffffffffffffffffffffffffffffffffffffff4ffffffffaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4ffffffffffffaaa4ffffffffffffffffffffffffffffffffffffffff4fffffaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4ffffffffaaaaaaa4ffffffffffffffffffffffffffffffffffffffff4ffffaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4ffffaaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffff44faaaaaa44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4aaaaaaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff4aaaaaaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4aaaaaaaaaaa4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff4aaaaaaaaa4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        `)
    pause(500)
    game.showLongText("LEVEL 3", DialogLayout.Top)
    game.showLongText("Destroy the enemy", DialogLayout.Top)
    LEVEL3_BOSS()
    pause(5000)
    pause(5000)
    pause(5000)
    info.startCountdown(10)
    pause(5000)
    pause(5000)
    game.splash("CONGRADULATIONS")
    pause(1000)
    game.over(true, effects.clouds)
}
function ENEMY_ENCOUNTER3 () {
    if (true) {
        RED_3 = sprites.create(img`
            ................................
            ................................
            ................................
            ...........4444444444...........
            ..........4422222222444.........
            .........222222222f22444........
            ........2f222222ff222244........
            ........21f11ffff22222244.......
            .......211fff111112222224.......
            .......11111111dd12222224.......
            .......111111111d11222224.......
            .......1111ff111d112222244......
            .......111fff111d1122222422.....
            .......111fff111111222224222....
            .......111fff111111222224222....
            .......111fff11d114222224222....
            .......11111111d144222224222....
            .......441111111442222224222....
            .......244444444422222224222....
            .......222222222222222224422....
            .......222222222222222224442....
            .......2ffff2fff222222224442....
            .......2f22fff2ff2222222444.....
            .......2222222222222222244......
            .......222222222222222224.......
            .......222222222222222224.......
            .......2222222...22222224.......
            .......4422222...22222244.......
            ........422222...2222224........
            ........44422.....222244........
            ..........444.....24444.........
            ................................
            `, SpriteKind.RED2)
        RED_3.setPosition(70, 84)
    }
    pause(500)
    return 0
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.RED2, function (sprite, otherSprite) {
    RED_3.destroy(effects.fire, 500)
    pause(100)
    info.changeScoreBy(4)
})
function ENEMY_ENCOUNTER2 () {
    if (true) {
        RED_2 = sprites.create(img`
            ................................
            ................................
            ................................
            ...........4444444444...........
            ..........4422222222444.........
            .........222222222f22444........
            ........2f222222ff222244........
            ........21f11ffff22222244.......
            .......211fff111112222224.......
            .......11111111dd12222224.......
            .......111111111d11222224.......
            .......1111ff111d112222244......
            .......111fff111d1122222422.....
            .......111fff111111222224222....
            .......111fff111111222224222....
            .......111fff11d114222224222....
            .......11111111d144222224222....
            .......441111111442222224222....
            .......244444444422222224222....
            .......222222222222222224422....
            .......222222222222222224442....
            .......2ffff2fff222222224442....
            .......2f22fff2ff2222222444.....
            .......2222222222222222244......
            .......222222222222222224.......
            .......222222222222222224.......
            .......2222222...22222224.......
            .......4422222...22222244.......
            ........422222...2222224........
            ........44422.....222244........
            ..........444.....24444.........
            ................................
            `, SpriteKind.RedLIFE)
        RED_2.setPosition(127, 62)
    }
    pause(500)
    return 0
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.WALL, function (sprite, otherSprite) {
    THROW_ROCK.destroy(effects.coolRadial, 500)
    THROW_ROCK = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f . . 
        f 8 8 8 8 8 8 8 8 f 4 4 4 f f . 
        f 8 8 8 8 8 8 8 8 f 4 1 f 4 f f 
        f 8 8 8 8 8 8 8 8 f f 4 4 4 4 f 
        f 8 8 8 8 8 8 8 8 f 4 f f f 4 f 
        f 8 8 8 8 8 8 8 8 f 4 4 4 4 f f 
        f f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    THROW_ROCK.controlWithArrowKeys()
    THROW_ROCK.setTrace()
    WALLLLL = sprites.create(img`
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
    THROW_ROCK.setStayInScreen(true)
    info.changeLifeBy(-1)
    pause(2000)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    THROW_ROCK.destroy(effects.halo, 500)
    THROW_ROCK = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f . . 
        f 8 8 8 8 8 8 8 8 f 4 4 4 f f . 
        f 8 8 8 8 8 8 8 8 f 4 1 f 4 f f 
        f 8 8 8 8 8 8 8 8 f f 4 4 4 4 f 
        f 8 8 8 8 8 8 8 8 f 4 f f f 4 f 
        f 8 8 8 8 8 8 8 8 f 4 4 4 4 f f 
        f f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    THROW_ROCK.controlWithArrowKeys()
    THROW_ROCK.setTrace()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    RED_Enemy.destroy(effects.fire, 500)
    info.changeScoreBy(4)
    pause(100)
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
        ...ff5588999885588888899988ff...
        ...ff5588999885588888899988ff...
        fff88448899988558888889998888ff.
        fff88448899988558888889998888ff.
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.RedLIFE, function (sprite, otherSprite) {
    RED_2.destroy(effects.fire, 500)
    pause(100)
    info.changeScoreBy(4)
})
let AVATAR4: Sprite = null
let AVATAR3: Sprite = null
let AVATAR2: Sprite = null
let AVATAR1: Sprite = null
let RED_2: Sprite = null
let RED_Enemy: Sprite = null
let RED_3: Sprite = null
let PURPLE_TEAMMATE: Sprite = null
let BLUE_TEAMMATE: Sprite = null
let BLUE3: Sprite = null
let BLUE2: Sprite = null
let GREEN_ENEMY: Sprite = null
let THROW_ROCK: Dart = null
let WALLLLL: Sprite = null
let RESPONSE1 = 0
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
game.showLongText("Hello and welcome to SlimeDart", DialogLayout.Bottom)
INTRO_AVATAR()
game.showLongText("Pick an Avatar", DialogLayout.Top)
RESPONSE1 = game.askForNumber("Pick a number 1-4", 1)
Intro2()
sprites.destroyAllSpritesOfKind(SpriteKind.MODEL)
pause(200)
WALLLLL = sprites.create(img`
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
THROW_ROCK = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f . . 
    f 8 8 8 8 8 8 8 8 f 4 4 4 f f . 
    f 8 8 8 8 8 8 8 8 f 4 1 f 4 f f 
    f 8 8 8 8 8 8 8 8 f f 4 4 4 4 f 
    f 8 8 8 8 8 8 8 8 f 4 f f f 4 f 
    f 8 8 8 8 8 8 8 8 f 4 4 4 4 f f 
    f f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile, 10, 110)
THROW_ROCK.controlWithArrowKeys()
THROW_ROCK.setTrace()
info.setLife(5)
info.setScore(0)
if (info.score() == 0) {
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
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111
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
        9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999999999999999
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
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111119999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111119999999991111111111111111111119999999999999999999
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
    if (true) {
        ENEMY_ENCOUNTER()
        ENEMY_ENCOUNTER2()
        ENEMY_ENCOUNTER3()
    }
    pause(100)
    THROW_ROCK.setStayInScreen(true)
}
pause(5000)
pause(5000)
OFFICAL_LEVEL_2()
OFFICAL_LEVEL3()
OFFICAL_LEVEL3()
