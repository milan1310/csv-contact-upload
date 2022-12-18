## Contact save NodeJs API
-----
### You can upload CSV file using API endpoint and 
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

  @codewithmilan