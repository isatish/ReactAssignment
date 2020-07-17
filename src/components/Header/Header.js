import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';

export class Header extends Component{
    style = {
        backgroundColor:'transparent',
        color:'black'
    }
    styleActive = {
        backgroundColor:'#008f00',
        color:'white',
        borderColor:'white'
    }

    toggleComponentHandler = (param) =>{
        this.props.btnClick(param);
    }

  //search posts based on user input
  searchInputChangeHandler = (event) =>{
    this.props.onSearch(event.target.value.substr(0,20));
    //console.log(event.target.value);
  }

 //clear searchbox
 clearSearchHandler = () =>{
        this.props.onClearSearchText();
        }
  
 //Check which header button clicked
 headerButtonClickHandler = (param) =>{
    //console.log(param);
          switch(param)
           {
               case 'form':
                  //show form
                  this.props.onHeaderButtonClick(true);
                  break;
               case 'posts':
                   //show form
                this.props.onHeaderButtonClick(false);
                  break;
               default:
                   break;
           }
  }

    render(){
        return(
            <div className="head-container" data-test="head-container">
                <div className="customSearch" data-test="customSearch">
                <img className="customSearch-img-left" data-test="customSearch-img-left" src="https://img.icons8.com/ios-glyphs/30/000000/search.png" alt=""></img>
                <input data-test="searchInput"  type="text" value={this.props.search} onChange={this.searchInputChangeHandler}></input>
                <img className="customSearch-img-right" data-test="customSearch-img-right" src="https://img.icons8.com/ios/32/000000/clear-symbol.png" alt="" onClick={this.clearSearchHandler}></img>
                </div>
                <hr/>
                <button style={this.props.showNewPostForm?this.styleActive:this.style} onClick={this.headerButtonClickHandler.bind(this,'form')}>New Post</button>
                <button style={this.props.showNewPostForm?this.style:this.styleActive} onClick={this.headerButtonClickHandler.bind(this,'posts')}>Published</button>
                <hr/>
            </div>
        );
    };
}

const mapStateToProps = state =>{
    return{
      search: state.search,
      showNewPostForm: state.showNewPostForm
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      onSearch: (searchText) => dispatch({type: 'SEARCH_POST', searchText:searchText }),
      onClearSearchText: () => dispatch({type: 'CLEAR_SEARCHTEXT'}),
      onHeaderButtonClick: (showForm) => dispatch({type: 'HEADER_BUTTON_CLICK', showForm:showForm})
    };
  };


export default connect(mapStateToProps,mapDispatchToProps) (Header);