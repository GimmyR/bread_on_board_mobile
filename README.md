# Bread on Board

Bread on Board is a mobile application developed with React Native that lets you create recipes and consult them in To-Do List mode.

Download the Android app [here](./bread-on-board-release-1.0.0.apk).

## Prerequisites (For Android)

* **Node** version **18.17.1**
* **NPM** version **9.7.1**
* **OpenJDK** version **11.0.20**
* **Android SDK** version **13 ("Tiramisu")**

## Dependency installation

Run the command `npm install`.

## Smartphone developer mode activation

Go to your smartphone's settings to find your system's build number. Tap on it several times until the phone prompts you to activate this mode. Don't forget to activate debug mode, which is not always enabled.

Connect your smartphone to your computer using a USB cable and run the command `adb devices` to make sure everything's working.

## API Address

Edit the API Address in *src/helpers.js*.

## Server launch on debug mode

On terminal 1, run the command `npm start`.

## Installation of the mobile application on debug mode

On terminal 2, run the command `npm run android` (for Android).