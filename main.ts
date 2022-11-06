basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    basic.pause(500)
})
