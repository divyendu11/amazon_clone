# MERN AMAZON_CLONE

# LESSONS
1) Introduction
2) Install tools
3) Create react app
4) Create Git Repository
5) List Products
    1) Create products array
    2) Add product images
    3) Render products
    4) Style products
6) Add routing
    1) npm i react-router-dom
    2) create route for home screen
    3) create router for product screen

7) Create Node.JS Server
   1) run npm init in root folder
   2) Update package.json set type: module
   3) Add .js to imports
   4) npm install express
   5) create server.js
   6) add start command as node backend/server.js
   7) require express
   8) create route for / return backend is ready.
   9) move products.js from frontend to backend
   10) create route for /api/products
   11) return products
   12) run npm start

8) Fetch products from backend
    1) Set proxy in package.json
    2) npm install axios
    3) use state hook
    4) use effect hook
    5) use reducer hook

9) Manage state by Reducer Hook
    1) define reducer
    2) update fetch data
    3) get state from useReducer

10) Add bootstrap UI framework
    1) npm install react-bootstrap bootstrap
    2) update App.js

11) Create Product and rating component
    1) Create rating component
    2) Create product component
    3) Use rating component in product component

12) Create Product details screen
    1) Fetch product from backend
    2) Create 3 columns for image, info and action

13) Create loading and message component
    1) Creating loading component
    2) use spinner component
    3) create message component 
    4) create utils.js to define get error function

14) Implement Add to Cart
    1) Create React Context
    2) define reducer
    3) create store provider
    4) implement add to cart button click handler

15) Complete Add to Cart
    1) Check exist item in the cart
    2) Check count in stock in backend

16) Create cart screen
    1) Create 2 columns
    2) Display items list
    3) Create action column

17) Complete Cart Screen
    1) Click handler for inc/dec item
    2) Click handler for remove item
    3) Click handler for checkout