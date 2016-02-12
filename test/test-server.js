var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server/server.js');
var Item = require('./../server/database/models/ItemModel.js')
var should = chai.should();

chai.use(chaiHttp);

describe('XitIO Database Testing', function() {
  it('should allow items to be posted to the database', function(done) {
    chai.request(server)
      .post('/item/1')
      .send()
      .end(function(err, res) {
        res.should.have.status(201);
        done();
      })
  })
})