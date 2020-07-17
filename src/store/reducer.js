import * as actionTypes from './actions';

const initialState = {
    posts:[],
    search:'',
    showNewPostForm: true,
    postTitle:'',
    postBody:'',
    postTitleError:'',
    postBodyError:''
};

const reducer = (state = initialState, action) =>{

    switch (action.type){
        case actionTypes.PUBLISH_POST:
            const newPost ={
                postTitle: action.postTitle,
                postBody: action.postBody
               };
                return{
                   ...state,
                   posts:state.posts.concat(newPost),
                   showNewPostForm:action.showNewPostForm
                }

        case actionTypes.SEARCH_POST:
                return{
                    ...state,
                    search: action.searchText
                }

        case actionTypes.CLEAR_SEARCHTEXT:
            return{
                ...state,
                search: ''
            }
        
        case actionTypes.HEADER_BUTTON_CLICK:
            return{
                ...state,
                showNewPostForm: action.showForm
            }
        default:
                return state;
    }
};

export default reducer;