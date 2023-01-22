# Steps and End-points:-

### Product end point:-
  - Add product:- `baseurl` + `/products/add`

  - Update product:- `baseurl` + `/products/update/:id`
  - Delete product:- `baseurl` + `/products/delete/:id`

  - Get products:-  `baseurl` + `/products`

  - Get products by a range of price:- `baseurl` + `/products?price_low=300&&price_high=700`
  - Get products by a range of Quantity:- `baseurl` + `/products/quantity?q_low=3&&q_high=7`

  - Get products by any query:- `baseurl` + `/products/q?brand=Milky Mist` 

  - Get sorted products price in descending order:-  `baseurl` + `/products/q?sortBy=desc`
  - Get sorted products price in ascending order:-  `baseurl` + `/products/q?sortBy=asc`

  - Get products by Id: `baseurl` + `/products/getById/:id`


### User endpoints:-

  - Sign Up for admin:- `baseurl` + `/users/admin/signup`
  - Sign Up for user:- `baseurl` + `/users/user/signup`

  - Login:- `baseurl` + `/users/login`

  - Update user:- `baseurl` + `/users/update/:id`
  - Update user:- `baseurl` + `/users/delete/:id`

  - Get users (all users and admin):- `base url` + `/users/`
  - Get profile of user by userkey which will be send to front end while login process along with token :- `userurl` + `users/profile/:userKey`

### Cart endpoint:- 
  - Get cart items: `baseurl` + `/cart/cartItems`
  - Add cart items: `baseurl` + `/cart/addcartItem/:id`

  - Delete cart item: `baseurl` + `/cart/delete/:id`
  - Quantity update: `baseurl` + `/cart/update/:id`

  - Get sorted cart items in descending order:-  `baseurl` + `cart/q?sortBy=desc`
  - Get sorted cart items in ascending order:-  `baseurl` + `cart/q?sortBy=asc`
  
  - Get cart items by a range of price:- `baseurl` + `/cart/cartItems?price_low=30&&price_high=70`