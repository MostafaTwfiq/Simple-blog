import React from "react";
import { Route, IndexRoute } from "react-router";
import App from './components/app.js';
import PostsIndex from './components/posts-index.js';
import PostsNew from './components/posts-new.js';
import PostsShow from "./components/posts-show.js";


export default (
<Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
</Route>
);