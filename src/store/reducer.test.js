import reducer from './reducer';
import * as actioTypes from './actions';

describe('reducer', () => {
    //initial state
it('should return the initial state',() => {
    expect(reducer(undefined,{})).toEqual({
        posts:[],
        search:'',
        showNewPostForm: true,
        postTitle:'',
        postBody:'',
        postTitleError:'',
        postBodyError:''
    });
});

//publish post
it('should update posts[] when new post published',() => {
    expect(reducer({
        posts:[],
        search:'',
        showNewPostForm: true,
        postTitle:'',
        postBody:'',
        postTitleError:'',
        postBodyError:''
    },{
        type: actioTypes.PUBLISH_POST,
        postTitle: 'New Post',
        postBody: 'Test post content',
        showNewPostForm: false
    })).toEqual({
        posts:[{postTitle: 'New Post',postBody: 'Test post content'}],
        search:'',
        showNewPostForm: false,
        postTitle:'',
        postBody:'',
        postTitleError:'',
        postBodyError:''
    })
});

});