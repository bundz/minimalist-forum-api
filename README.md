# minimalist-forum-api
Minimalist Forum API for teaching purpose. By default it will run on your port 3000.

# Install

```
npm install
```

# Run

```
npm start
```

# Requests

## Create Post

Endpoint: POST /post
Body: 
```javascript
{ 
  text: "post text here", 
  user: "User name here" 
}
```

## Get Post

Endpoint: GET /post
Return Body: 
```javascript
[
  { 
    text: "post text here", 
    user: "User name here" 
   }, ...
]
```
