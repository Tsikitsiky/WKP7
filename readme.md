# WKP7 - Library

## 1. In a few sentences,  explain the structure of your project.

1. I created an array of object and generated a book list from it using map with the function called `displayBook()`

2. I copied the original array in order to mutate it, so every time the user add or remove a book, it is in that array that everything happens

3. I used a function called `handleAddBtn()` to add a new book in the book list and in the array using the input from the user. The book is added in the array and in the list after a click on the button

4. A function called `handleCheckbox()` is used to check the status of the book. The checkbox itself is already checked if the book is already read when the user add it, however, if it is not read yet this function is used to change its status using its id with find.

5. The function `handleDelete()` is used to delete the book from the book list and from the array. I used filter to remove it from the array

## 2. If you had more time, what area of your project would you improve?

Maybe I would have focused more on the checkbox and store it in the local storage.

## 3. Did you learn anything new while working on this project?

Yes, I learnt how to use debugger

## 4. What was the most challenging part for you?

The most challenging part for me was to change the status value of the object after checking the checkbox.

## 5. Would you like a new explanation about a specific topic?

Yes, about local storage

## 6. Any other comments?

I couldn't start storing the array in the local storage, and I didn't really understand why the id that I was using in the heckbox is always undefined.