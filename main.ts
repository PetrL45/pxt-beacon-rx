radio.setTransmitSerialNumber(true)
radio.setTransmitPower(5)   // 0 .. 7
radio.setGroup(151)  // 0 .. 255

input.onButtonPressed(Button.A, function() {
    radio.sendNumber(randint(1, 9))
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("Z")
})

input.onButtonPressed(Button.AB, function () {
    radio.sendValue("ratatatatatata", 1)
})

radio.onReceivedNumber(function(receivedNumber: number) {
    basic.showNumber(receivedNumber)    
})

radio.onReceivedString(function(receivedString: string) {
    basic.showString(receivedString)
})

radio.onReceivedValue(function(name: string, value: number) {
    let serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (serial === 1975755938){
        basic.showNumber(value)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    basic.showNumber(control.deviceSerialNumber())
})
