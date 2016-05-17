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

const getURL = gooder('public url');

console.log(getURL);

	// => 'direct link to download file'

```

__CASE : 2__

```js

'use strict';

const gooder = require('gooder');

const getURL = gooder('private url')

console.log(getURL);

	// => 'Link associated with private google drive'

```

## Example

```js

const gooder = require('gooder');

const getURL = gooder('https://drive.google.com/file/d/0B3vyNXp6qDWwbXlwZllTd3BuUlk/edit?usp=sharing'));

console.log(getURL);

	// => https://googledrive.com/host/0B3vyNXp6qDWwbXlwZllTd3BuUlk

```

## TODO

```
❱ Extracting direct download link for public gdrives  :   ✔

❱ Extracting direct download link for private drives  :   ✖
```

## Related

- [gooder-cli](https://github.com/CodeDotJS/gooder-cli) : CLI Tool based on this API to download google drive media.

- [image-of](https://github.com/CodeDotJS/image-of) : Download facebook profile picture of any user.

- [instavim](https://github.com/CodeDotJS/instavim) : Complete media downloader for Instagram.

- [gravatar-of](https://github.com/CodeDotJS/gravatar-of) : Download gravatar profile of any user using his/her e-mail.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
