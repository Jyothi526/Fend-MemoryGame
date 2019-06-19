# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
--------------------
### Project - Cloning
##  I followed the following steps for completing this project.
- I gone through the instructions and then I got a GitHub link about the skeleton project that was provided by **Udacity** which is in rubric structure.
+ After downloaded the zip file and I extracted that file and placed that file into a new folder.
- While extracting the downloaded project from GitHub, I identified the files
1. `css/app.css`
2. `img/geometry2.png`
3. `js/app.js`
4. `index.html`(root file)
5. `readme.md` files
+ While seeing the `app.js `file, I came to one conclusion that the `app.js` file require some modifications.
+ Based on our needs , some modifications are done in `app.css`.
+ In memory game, shuffling the cards is a main task. This shuffling function was taken from `stack over flow` website.
+ All cards are placed in an array and named it as `chiList`.
+ When the window is loaded, the shuffle function will be triggered.
+ A spread operator is used by me to convert HtmlCollection into an array.
+ After this , I set the `chiList` array as a parameter in `shuffle` function. By doing this , I will get a new array everytime.
+ When we click on the card it should show the card. So for this I added a eventListener to the card and named it as `revealCard`.
+ In `revealCard` function, I gave a timer and when I click on the card the timer's countdown starts.
+ In storingCard parameter, if two cards are clicked then it is one move.
+ There will be 3 stars initially. If the moves exceeds to 14 ,then one move will disappear. If the moves exceeds to 21 ,then one move will disappear.
+ For displaying the output, I added a popup message by using SweetAlert function.
+ For that I used `sweetalert2` function.
+ Finally, the memory game is finished by displaying the pop-up message.
