'use strict';

/*
  set 'secret' values defined by a 'key' word
  1. exposes 2 functions */
module.exports = function() {
  var _key = '';
  var _value;

  /*setValue ( key, value )
  accepts 2 keys
  set value in vault identified by key*/

  function setValue(key,value) {
    _key = key;
    _value = value;
  }

  /*getValue( key )
  accepts 1 key
  return value if key exist in vault
  return null if key does not exist */
  function getValue(key) {
    if (_key == key) {
      return _value;
    } else {
      return null;
    }
  }
  return {
    setValue : setValue,
    getValue : getValue
  };
};