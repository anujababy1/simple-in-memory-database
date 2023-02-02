## Simple in memory database

This code implements a simple in-memory database for storing,retrieving,updating and deleting information in JavaScript. 


## Description


This code implements a simple in-memory database for storing,retrieving,updating and deleteing information about books. It uses two classes: Book and Library.

The Book class represents a book, and has four properties: id, title, author, and year. The id property is used to uniquely identify each book, while the other properties describe the book's title, author, and year of publication. 

The Library class represents a collection of books and implements all the CRUD operations: Create, Read, Update, and Delete. The books property is an array that stores all the books in the library.

The addBook method is used to create a book by adding it to the books array. The findBookById, findBookByTitle, findBookByAuthor, and findBookByYear methods are used to read a book by finding it based on its id, title, author, or year respectively. The updateBook method is used to update a book by finding it based on its id and then updating its properties with the values in the updates object. Finally, the deleteBook method is used to delete a book by finding it based on its id and removing it from the books array. 

I decided to code it this way because it provides a simple, straightforward implementation of a basic in-memory database. The use of classes and objects allows for easy organization and management of the data, while the implementation of CRUD operations provides a basic set of functionality for interacting with the data. This can serve as a starting point for a more advanced implementation (it is easier to maintain and add new features in the future), or be used as-is for simple, small-scale projects. Additionally, the use of arrays and filter functions provides efficient and concise ways of doing the CRUD operations.

## Instructions to follow

```sh
1)git clone https://github.com/anujababy1/student-management-system.git
2)git fetch origin
3)git checkout main
4)Open index.html file in the browser and view the output on the browser console.

```
