var bleno = require('bleno');
var os = require('os');
var util = require('util');

var BlenoCharacteristic = bleno.Characteristic;

var WriteDataCharacteristic = function() {
 WriteDataCharacteristic.super_.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb11',
    properties: ['write'],
  });

 this._value = new Buffer(0);
};

WriteDataCharacteristic.prototype.onWriteRequest = function(offset, callback) {
  console.log('on -> advertisingStart: ' + callback);
}
/*
WriteDataCharacteristic.prototype.onReadRequest = function(offset, callback) {

  if(!offset) {

    var loadAverage = os.loadavg().map(function(currentValue, index, array){

      return currentValue.toFixed(3);
    });

    this._value = new Buffer(JSON.stringify({
      'oneMin' : loadAverage[0],
      'fiveMin': loadAverage[1],
      'fifteenMin': loadAverage[2]
    }));
  }

  console.log('LoadAverageCharacteristic - onReadRequest: value = ' +
    this._value.slice(offset, offset + bleno.mtu).toString()
  );

  callback(this.RESULT_SUCCESS, this._value.slice(offset, this._value.length));
};*/

util.inherits(WriteDataCharacteristic, BlenoCharacteristic);
module.exports = WriteDataCharacteristic;
