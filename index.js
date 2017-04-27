'use strict';

module.exports = link => {
	if (typeof link !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof link}`);
	}

	return `https://googledrive.com/host/${link.split('/')[5]}`;
};
