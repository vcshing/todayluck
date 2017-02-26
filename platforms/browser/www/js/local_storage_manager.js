window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
	this.cookieKey ="";
	this.selectedTwelveConstellations="";
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getSelectedTwelveConstellations = function () {
  return this.storage.getItem(this.selectedTwelveConstellations) || "";
};

LocalStorageManager.prototype.setSelectedTwelveConstellations = function (data) {
  this.storage.setItem(this.selectedTwelveConstellations, data);
};

LocalStorageManager.prototype.clearSelectedTwelveConstellations = function () {
  this.storage.removeItem(this.SelectedTwelveConstellations);
};


// Game state getters/setters and clearing
LocalStorageManager.prototype.getCookie = function () {
  var stateJSON = this.storage.getItem(this.cookieKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setCookie = function (inputArr) {
  this.storage.setItem(this.cookieKey, JSON.stringify(inputArr));
};

LocalStorageManager.prototype.clearCookie = function () {
  this.storage.removeItem(this.cookieKey);
};

var storageManager = new LocalStorageManager();