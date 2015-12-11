## Pathlink

### Installation

```
npm install --save pathlink
```

### Usage

```javascript
/* Config URLs */
var pathlink = require('pathlink');

pathlink.config({
  home: "/",
  posts: "/posts",
  post: "/posts/:id",
  comment: "/posts/:post_id/comments/:comemnt_id"
});

/* Get URL */
var pathlink = require('pathlink');

pathlink.get('home'); => "/"
pathlink.get('post', {id: 3}); => "/posts/3"
pathlink.get('comment', {post_id: 3, comment_id: 5}); => "/posts/3/comments/5"
pathlink.get('posts', null, {post_id: 5}); => "/posts?post_id=5"
```
