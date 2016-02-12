var React = require('react');
var todoStore = require('../stores/todoStore');
var todoActions = require('./../actions/todoActions.js');

var AddItem = React.createClass({

  // getInitialState: function() {

  // },


  addToList: function() {
    console.log(this);
    todoActions.addItem(this.refs.wishlistitem.value);
    this.refs.wishlistitem.value = '';
  },

  render: function() {
    console.log('add item rendering');
    return (
      <div>
        <input ref='wishlistitem' name='wishlistitem' placeholder='enter item here'></input>
        <button onClick={this.addToList}>Click here to add</button>
      </div>
    )
  }

})

module.exports = AddItem;