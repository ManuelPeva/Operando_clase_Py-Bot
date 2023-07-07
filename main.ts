input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("GO!")
})
let start = 0
basic.forever(function () {
    if (start == 1) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showIcon(IconNames.Skull)
            basic.pause(1000)
            basic.showString("Game over")
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
    }
})
