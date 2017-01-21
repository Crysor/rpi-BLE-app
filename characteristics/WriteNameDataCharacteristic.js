var bleno = require('bleno');
var os = require('os');
var util = require('util');
var fs = require('fs';

var BlenoCharacteristic = bleno.Characteristic;

var WriteNameDataCharacteristic = function() {
 WriteNameDataCharacteristic.super_.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb11',
    properties: ['write'],
  });

 this._value = new Buffer(0);
};

WriteNameDataCharacteristic.prototype.onWriteRequest = function(offset, callback) {

  console.log('response -> : ' + callback + ' offset '+offset);
}

util.inherits(WriteNameDataCharacteristic, BlenoCharacteristic);
module.exports = WriteNameDataCharacteristic;
