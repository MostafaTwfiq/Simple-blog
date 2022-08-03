import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {reduxForm, Field, SubmissionError } from 'redux-form';
import { createPost } from "../actions/index.js";
import {Link} from 'react-router';

const renderInput = field => {
  return (
    <div>
        <input className="form-control" {...field.input} type={field.input}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>
  );
}

const renderTextArea = field => {
    return (
      <div>
          <textarea className="form-control" {...field.input} type={field.textarea}/>
          {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
      </div>
    );
}


class PostsNew extends React.Component {

    constructor(props) {
        super(props);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
    }

    validateAndSubmit(values) {
        if (!values.title) {
            throw new SubmissionError({
                title: 'Invalid title!',
                _error: 'Invalid title'
            });
        }
       
        this.props.createPost(values).then(() => {
            this.context.router.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.validateAndSubmit)} className="posts-new">
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" component={renderInput} type="text"/> 
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <Field name="categories" component={renderInput} type="text"/> 
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" component={renderTextArea} type="text"/> 
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger pull-xs-right">Go back</Link>
            </form>
        );
    }
}

PostsNew.contextTypes = {
    router: PropTypes.object
};

const rForm =  reduxForm ({
    form: 'PostsNewForm'
})(PostsNew);

export default connect(null, {createPost: createPost})(rForm); 