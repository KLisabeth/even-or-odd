# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty files

## 1. Data & Log

* `data/strings.js` & `log.js`

## 2. Init (not finished!)

* The code in `init.js` that renders the current list for users is complete.
  * But the `renderList` DOM Component function is not!  you will need to write this.
  * (I wrote function creating new elements for the test)
* `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

* A user can reset stat & see a cleared User Interface
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: Save

>* which user story makes sense to code first?
  * A user can save the input, so later it can be displayed and will not be repeated.
>* which files of code do you need to change?
  * I wrote the code in `listeners/save.js` & `handlers/save.js`
>* what are you changing in them?
  * The handler function defines, separates and stores `odds`, `evens` and `NaNy`in data. In `listeners/save.js` the handler fires up with `click` event.

## 5. User Story: Display Odds

>* which user story makes sense to code first?
  * A user wants to see saved **odd** numbers .
>* which files of code do you need to change?
  * I wrote the code in `handlers/display-adds.js` & `listeners/display-odds.js`.
>* what are you changing in them?
  * The handler function defines and creates new list element. in `listeners/display-odds.js` will display new list with saved **odd numbers** on `click` event.

## 6. User Story: Display Evens

>* which user story makes sense to code first?
  * A user wants to see saved **even** numbers.
>* which files of code do you need to change?
  * I wrote the code in `handlers/display-evens.js` & `listeners/display-evens.js`.
>* what are you changing in them?
  * The handler function defines and creates new list element. in `listeners/display-evens.js` will display new list with saved **even numbers** on `click` event.

## 7. User Story: Display NaNy

>* which user story makes sense to code first?
  * A user wants to see saved **words**.
>* which files of code do you need to change?
  * I wrote the code in `handlers/display-nany.js` & `listeners/display-nany.js`.
>* what are you changing in them?
  * The handler function defines and creates new list element. in `listeners/display-nany.js` will display new list with saved **words** on `click` event.
