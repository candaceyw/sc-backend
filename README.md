# sc-backend

### Webinar Registration

#### Run Server

npm run start

#### END POINTS

Register a user: /registration
http method: [POST]

##### 500 (Server error)

```
  {
   Cannot Add Registration
    }

```

#### Body

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| `firstName`   | String | Yes      |             |
| `lastName`    | String | Yes      |             |
| `email`       | String | Yes      |             |
| `institution` | String | Yes      |             |
| `title`       | String | No       |             |
| `state`       | String | No       |             |

**/--------------------------------------/ REGISTRATION ROUTES /---------------------------------/**

### **Add a Registration**

_method url_: `/registration`

_http method_: **[POST]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
      "id": 1,
    "firstName": "Jon",
    "lastName": "Doe",
    "email": "jon@email.com",
    "institution": "First Bank",
    "title": "CAO",
    "state": "CA"
  },

]
```
