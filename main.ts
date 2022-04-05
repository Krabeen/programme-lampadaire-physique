radio.onReceivedNumber(function (receivedNumber) {
    if (0 == 0 || 0 == 0) {
        proximité = 1
        basic.pause(100)
        proximité = 0
    }
})
let proximité = 0
radio.setGroup(167)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 250) {
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.analogWritePin(AnalogPin.P0, 1023)
            radio.sendNumber(1)
        } else {
            if (proximité == 1) {
                pins.analogWritePin(AnalogPin.P0, 512)
            } else {
                pins.analogWritePin(AnalogPin.P0, 255)
            }
        }
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
