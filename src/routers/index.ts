import express from 'express';
export const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  console.log("root");
  res.json({ret: 'root OK'});
});
router.get('/test', function(req, res, next) {
  console.log("test");
  res.json({ret: 'OK test'});
});
router.get('/test2', function(req, res, next) {
  console.log("test2");
  res.json({ret: 'OK test2'});
});
router.post('/test3', function(req, res, next) {
  console.log("test3");
  console.log(req.apiGateway.event.body);
  res.json({ret: 'OK test3'});
});