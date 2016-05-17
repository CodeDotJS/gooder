#!/usr/bin/env node

'use strict';

var Promise = require('pinkie-promise');

function urlAuth(getLink) {
	var query = 'drive.google.com';

	var part = 'file';

	if (getLink.indexOf(query) === -1 || getLink.indexOf(part) === -1) {
		return false;
	}

	if (getLink.indexOf(query) !== -1 || getLink.indexOf(part) !== -1) {
		return true;
	}
}

function getKey(checkURL) {
	if (urlAuth(checkURL) === true) {
		var regEx = /[0-9]/;

		var exPattern = checkURL.search(regEx);

		var sortKey = checkURL.substr(exPattern);

		var finalkey = sortKey.split('/')[0];

		var predefURL = 'https://googledrive.com/host/';

		return predefURL + finalkey;
	}
}

module.exports = function (driveLink) {
	if (typeof driveLink !== 'string') {
		return Promise.reject(new Error('Link required'));
	}

	if (urlAuth(driveLink) === false) {
		return Promise.reject(new Error('Link associated with private google drive.'));
	}

	if (typeof driveLink === 'string' || urlAuth(driveLink) === false) {
		return getKey(driveLink);
	}

	return null;
};
