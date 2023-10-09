# Bread on Board

Bread on Board (littéralement "pain sur la planche") est une application mobile développée avec *React Native* qui permet de créer des recettes de cuisine et de les consulter en mode To-Do List.

Get the released app for Android by clicking [here](./bread-on-board-release-1.0.0.apk).

## Prérequis (Pour Android)

* **Node** version **18.17.1** (ou plus)
* **NPM** version **9.7.1** (ou plus)
* **OpenJDK** version **11.0.20** (ou plus)
* **Android SDK** version **13 ("Tiramisu")**

## Installation des dépendances

Exécutez les commandes `npm install`.

## Activation du mode développeur du smartphone

Allez dans les paramètres de votre smartphone pour chercher le numéro de build de votre système. Tapez plusieurs deçu jusqu'à ce que le téléphone vous propose d'activer ce mode. Pensez également à activer le mode débogage qui n'est pas toujours activé de base.

Connectez votre smartphone à votre ordinateur à l'aide d'un câble USB et tapez la commande `adb devices` pour vérifier que tout fonctionne.

## Lancement du serveur de débogage

Sur le terminal 1, exécutez la commande `npm start`.

## Installation de l'application mobile en mode débogage

Sur le terminal 2, exécutez la commande `npm run android` (pour Android).