/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program ...
*/

//variables
const servoNumberOne = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servoNumberOne, 0)
  basic.clearScreen()
  basic.showString('0')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servoNumberOne, 180)
  basic.clearScreen()
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
