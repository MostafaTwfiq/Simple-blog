import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {fetchPost, deletePost} from '../actions/index.js';
import {Link} from 'react-router';


class PostsShow extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id).then(() => {this.context.router.push('/');});
    }

    componentDidMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }
        return (
            <div className="posts-show">
                <Link to="/">Back To Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete Post</button>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        );
    }
}

PostsShow.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return {post: state.posts.post};
}


export default connect(mapStateToProps, {fetchPost: fetchPost, deletePost: deletePost})(PostsShow); 