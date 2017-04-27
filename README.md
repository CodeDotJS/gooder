# gooder

> Get direct downloadable link to the publically shared media on google drive.

[![Build Status](https://travis-ci.org/CodeDotJS/gooder.svg?branch=master)](https://travis-ci.org/CodeDotJS/gooder)

## Install

```
$ npm install --save gooder
```

### Usage

```js
const gooder = require('gooder');

console.log(gooder('url'));
```

__`Example`__

```js
console.log(gooder('https://docs.google.com/file/d/0BxbU2MT68i0cTW9vQzY5QUxwNm8/view'));

// => https://googledrive.com/host/0BxbU2MT68i0cTW9vQzY5QUxwNm8
```

## Related

- __[`gooder-cli`](https://github.com/CodeDotJS/gooder-cli)__ : `Download publically shared media from google drive with ease`


## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
