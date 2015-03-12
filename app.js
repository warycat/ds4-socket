var io = require('socket.io')();
io.listen(3000);

io.on('connection', function(socket){});

var HID = require('node-hid');

var devices = HID.devices();

var ds4 = new HID.HID(1356,1476);

var s = '';
ds4.on('data',function(d){
  var v = d.toString('hex',5,8);
  if(s!==v){
  	s=v;
  	console.log(s);
  	io.emit('s',v);
  }
});

ds4.on('error',function(d){
  console.log(d);
});
