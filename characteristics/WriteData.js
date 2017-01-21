var bleno = require('bleno');
var os = require('os');
var util = require('util');
var fs = require('fs';

var BlenoCharacteristic = bleno.Characteristic;

var WriteDataCharacteristic = function() {
 WriteDataCharacteristic.super_.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb12',
    properties: ['write'],
  });

 this._value = new Buffer(0);
};

WriteDataCharacteristic.prototype.onWriteRequest = function(offset, callback) {

  console.log('response -> : ' + callback + ' offset '+offset);
}

util.inherits(WriteDataCharacteristic, BlenoCharacteristic);
module.exports = WriteDataCharacteristic;
