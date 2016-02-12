var Item = require('./../models/ItemModel.js');

module.exports = {
  getItem: function(req, res, next) {
    Item.find({
      
    }, function(err, docs) {
      if(err) {
        res.send(err);
      } else {
        console.log('found item')
        res.send(docs);
      }
    })
  },

  postItem: function(req, res, next) {
    var item = new Item({
      description: "first item"
    });
    item.save(function(err, docs) {
      if(err) {
        return err;
      } else {
        console.log('saved');
        res.send(docs);
      }
    })
  },

  updateItem: function(req, res, next) {
    Item.findOneAndUpdate({
      description: "first item"
    }, {
      description: "updated first item"
    }, function(err, docs) {
      console.log('item has been updated')
      res.send('success', docs)
    })
  },

  deleteItem: function(req, res, next) {
    Item.findOneAndRemove({
      description: "first item"
    }, function(err, docs) {
      console.log('removed item');
      res.send(docs)
    })
  }
}