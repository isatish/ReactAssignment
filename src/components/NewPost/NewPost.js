import React, { Component } from 'react';
import { connect } from 'react-redux';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const initialState = {
        pTitle:'',
        pBody:'',
        postTitleError:'',
        postBodyError:''
}

class NewPost extends Component {
    state = initialState;

    validateForm = () => {
       let postTitleError = '';
       let postBodyError ='';

       postTitleError = (!this.state.pTitle.length)?'Post title can\'t be empty':'';
       postBodyError = (!this.state.pBody.length)?'Post conetnt can\'t be empty':'';
       
       if(postTitleError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }
       if(postBodyError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }

       return true;
    }

    inputChangeHandler = (event) =>{
        this.setState({pTitle: event.target.value });
    }

    textareaChangeHandler = (event) =>{
        this.setState({pBody: event.target.value });
    }

    postPublishHandler = (event) => {
        event.preventDefault();
        const isValid = this.validateForm();
        if(isValid)
        {
            //console.log(this.state);
            this.props.onPublishPostHandler(this.state.pTitle,this.state.pBody,false );
            this.setState(initialState);
        }     
    }

    render(){
        return(
            <form >
            <div>
            <br/>
             <input style={(this.state.postTitleError)?{border: '2px solid red'}:{}} type="text" value={this.state.pTitle} onChange={this.inputChangeHandler} placeholder="Post title"></input>
             <div style={{color:'red',fontSize:12}}>{this.state.postTitleError}</div>
             </div>
             <br/>
             <div>
            
            <div style={(this.state.postBodyError)?{border: '2px solid red'}:{}}>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onInit={editor => {
                // You can store the "editor" and use when it is needed.
                //console.log( 'Editor is ready to use!', editor );
                }}   
                onChange={ ( event, editor ) => {
                const data = editor.getData();
                this.setState({pBody: data });
                //console.log( { event, editor, data } );
                } }
                value={this.state.pBody}  
            />
            </div>
             {/* <textarea style={(this.state.postBodyError)?{border: '2px solid red'}:{}} value={this.state.pBody} onChange={this.textareaChangeHandler} placeholder="What's in your mind?"></textarea> */}
             <div style={{color:'red',fontSize:12}}>{this.state.postBodyError}</div><br/>
             <button onClick={this.postPublishHandler}>Publish</button>
            </div>
        </form>
        );
    }
}

const mapStateToProps = state =>{
    return{
      posts: state.posts,
      search: state.search,
      showNewPostForm: state.showNewPostForm,
      postTitle: state.postTitle,
      postBody: state.postBody,
      postTitleError: state.postTitleError,
      postBodyError: state.postBodyError
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      onPublishPostHandler: (postTitle, postBody, showNewPostForm) => dispatch({type: 'PUBLISH_POST', postTitle:postTitle, postBody:postBody, showNewPostForm:showNewPostForm })
    };
  };

export default connect(mapStateToProps,mapDispatchToProps) (NewPost);