## Contact save NodeJs API
-----
### You can upload CSV file using API endpoint and 

I have built this API on top of the `cluster` which is concept to utilize whole CPUs core and having no downtime.

`Clustering` generates new `workers` for each CPU core by which we can run our sub request by kipping our master free for great response and utilization resources.
-----
##### API endpoints

BASE URL: http://localhost:3000/

- #post /signup - accept JSON data 
`{`
    `"email":"",`
    `"password":""`
`}`

- #post /login  - accept JSON data
`{`
    `"email":"",`
    `"password":""`
`}`

- #post /savecontacts - accept only CSV files
  -- this endpoint is only work after successfull login to application and to verify must use toke generated at a time of login - it's a Barer token so pass this token in header at a time of request this endpoint
----
## Test Instruction
- For API testing please use attached postman collection, import this collection into your post man.
- You can see `.env.example` file inside root directory please rename it to `.env` and change `MONGO_CONNECTION_URL` with you mongodb url for accessing databse.
- after login or signup you will get `token` please copy that token head over to authorization and replace it's value

----
## Tech Stack
- `NodeJS`, `ExpressJS`, `MongoDB & Mongoose`
- `Multer` for file uploading and handling.
- `jsonwebtoken` for token managment and authorization.
- `bcrypt` for encryption and decrption of the password.
  
  
  @codewithmilan - happy codding.
