var bleno = require('bleno');
var os = require('os');
var util = require('util');

var BlenoCharacteristic = bleno.Characteristic;

var UptimeCharacteristic = function() {

 UptimeCharacteristic.super_.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb09',
    properties: ['read']

  });

 this._value = new Buffer(0);
};

UptimeCharacteristic.super_.call(this, {
   uuid: '05ee54ba-e8d7-499a-a0d2-b37a8d575748',
   properties: ['write']
 });

UptimeCharacteristic.prototype.onReadRequest = function(offset, callback) {

  if(!offset) {

    this._value = new Buffer(JSON.stringify({
      'uptime' : os.uptime()
    }));
  }

  console.log('UptimeCharacteristic - onReadRequest: value = ' +
    this._value.slice(offset, offset + bleno.mtu).toString()
  );

  callback(this.RESULT_SUCCESS, this._value.slice(offset, this._value.length));
};

util.inherits(UptimeCharacteristic, BlenoCharacteristic);
module.exports = UptimeCharacteristic;
