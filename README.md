# MyReads Project (Final assessment project for Udacity's React Fundamentals course)

In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

I have used the starter template which provided a static example of the CSS and HTML markup without any of the React code that is needed to complete the project. I have added interactivity to the app by refactoring the static code in the starter template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.


## Table of Contents

- [Getting Started](#getting-started)
- [Create React App](#create-react-app)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Backend Server](#backend-server)
- [How to launch the app locally](#how-to-launch-the-app-locally)
  - [Installation](#installation)
- [Important](#important)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Getting Started

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Folder Structure
After creation, your project should look like this:
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .eslintrc.js # eslint configuration settings
├── public
│   ├── favicon.ico # React Icon,
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of the app.
    ├── SearchBooks.js # search page react component
    ├── ListBooks.js # List book home page component
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Prerequisites
* ES6, Promises, REACT


## Backend Server
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## How to launch the app locally?

### Installation

1. Clone the Project - `https://github.com/praveen-me/myReads.git`
2. Go into the directory where the project now lives - `cd myReads`
3. Install the dependencies - `npm install`
4. Start the app - `npm start`
```
The application will be running at http://localhost:3000 URL
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
