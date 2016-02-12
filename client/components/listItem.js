var React = require('react');
var todoStore = require('../stores/todoStore');
var todoActions = require('./../actions/todoActions.js');

var ListItem = React.createClass({

  // getInitialState: function() {
  //   list: 
  // },

  removeFromList: function(index) {
    console.log(index);
    todoActions.deleteItem(index);
  },

  render: function() {
    console.log('list item rendering');
    var that = this;
    return (
      <div>
      {this.props.list.map(function(item, i) {
        return (
          <div ref={i} key={i}>
            item: {item}
            <button onClick={that.removeFromList.bind(null, i)}>Delete</button>
          </div>
        )
      })}
      </div>
    )
  }

})

module.exports = ListItem;