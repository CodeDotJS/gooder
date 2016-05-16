<h1 align="center">
<img src="media/3.png" alt="GOODER" width="400">

</h1>

<h5 align="center">NodeJS API which provides direct link to download files available on google drive if they are shared publicly.</h5>

<h1 align="center">
<img src="https://travis-ci.org/CodeDotJS/twifo.svg?branch=master">
</h1>

## Install

```
$ npm install --save gooder
```

## Usage

__CASE : 1__

```js
'use strict';

const gooder = require('gooder');

gooder('publicDriveURL').then(directLink => {
	console.log(directLink);

	// => direct link to download file
});
```

__CASE : 2__

```js
'use strict';

const gooder = require('gooder');

gooder('privateDriveURL').then(directLink => {
	console.log(directLink);

	// => Sorry! The dirve is not shared publically.
})
```

## TODO

```
❱ Extracting direct download link for public gdrives  :   ✔

❱ Extracting direct download link for private drives  :   ✖
```

## Related

- [GOODER-CLI](https://github.com/CodeDotJS/gooder-cli) : CLI Tool to download google drive media.

- [IMAGE-OF](https://github.com/CodeDotJS/image-of) : Download facebook profile picture of any user.

- [INSTAVIM](https://github.com/CodeDotJS/instavim) : Complete media downloader for Instagram.

- [GRAVATAR-OF](https://github.com/CodeDotJS/gravatar-of) : Download gravatar profile of any user using his/her e-mail.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
