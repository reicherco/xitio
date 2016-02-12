var React = require('react');
var ReactDOM = require('react-dom');
var todoStore = require('../stores/todoStore');
var todoActions = require('./../actions/todoActions.js');
var List = require('./listItem.js');
var AddItem = require('./AddItem.js');

var wishList = React.createClass({
  getInitialState: function() {
    return {
      list: todoStore.getList()
    }
  },

  componentDidMount: function(){
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    todoStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      list: todoStore.getList()
    })
  },

  render: function() {
    console.log(List);
    return (
      <div>
        Test
        <List list={this.state.list}/>
        <AddItem/>
      </div>
      );
  }
});

module.exports = wishList;