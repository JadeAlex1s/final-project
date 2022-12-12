controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    myDart.angle = 0
    myDart.setTrace(true)
})
let myDart: Dart = null
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 . . . 4 4 . . . 4 4 . . 
    . . 4 5 4 . 4 5 5 4 . 4 5 4 . . 
    . . 4 5 5 4 5 5 5 5 4 5 5 4 . . 
    . . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . f 5 8 9 8 5 8 8 8 9 8 f . . 
    . f 8 4 8 9 8 5 8 8 8 9 8 8 f . 
    . f 8 4 4 4 5 8 8 8 8 8 8 8 f . 
    . f 4 8 f f f f f f f f f 8 f . 
    . f 4 8 f 3 3 f 8 8 8 8 8 8 f . 
    . 4 8 8 f f f f 8 8 8 8 8 8 f . 
    . f f 8 8 8 8 8 8 8 8 8 8 f f . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player, 10, 110)
myDart.setTrace(true)
myDart.controlWithArrowKeys(true)
myDart.angle = 0
myDart.angleRate += 10
