var itemController = require('./../controllers/ItemController.js');

module.exports = function(express) {
  var itemRouter = express.Router();

  itemRouter.post('/1', itemController.postItem);
  itemRouter.get('/1', itemController.getItem);
  itemRouter.put('/1', itemController.updateItem);
  itemRouter.delete('/1', itemController.deleteItem);


  return itemRouter;
}