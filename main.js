const Library = book => {
  const books = [];

  const addBook = book => {
    books.push(book);
  }

  const checkOutBook = book => {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
      console.log(`You have checked out ${book.getAttribute('title')}.`);
    } else {
      console.log('That book does not exist.');
    }
  }

  const returnBook = book => {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', false);
      console.log(`You have returned ${book.getAttribute('title')}.`);
    } else {
      console.log('That book does not exist.');
    }
  }
  
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
}

const Book = (title, author) => {
  let attributes = {
    title: title,
    author: author,
    checkedOut: false
  }

  const getAttribute = attribute => {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  }

  const setAttribute = (attribute, value) => {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  }

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}

// let library = Library();

// let harryPotter = Book('Harry Potter', 'JK Rowling');
// library.addBook(harryPotter);
// library.checkOutBook(harryPotter);
// library.returnBook(harryPotter);

// console.log(harryPotter.getAttribute('checkedOut'));