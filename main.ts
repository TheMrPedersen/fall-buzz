basic.forever(function () {
    if (input.acceleration(Dimension.Strength) < 200) {
        music.ringTone(1000)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Strength))
})
