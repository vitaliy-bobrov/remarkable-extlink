# remarkable-extlink
[Remarkable](https://github.com/jonschlinkert/remarkable) plugin adds `target` and `rel` attributes for external links.

## Installation
`npm install --save-dev remarkable-extlink`

## Usage
```js
const Remarkable = require('remarkable');
const extLink = require('remarkable-extlink');
const md = new Remarkable();

md
  .use(extlink, {
    host: 'my-host.com'
  });
```

## Options

### host {String}

**Required**

You site host name to detect external links.

### target {String}

Target link attribute value, default `_blank`.

### rel {String}

Rel link attribute value, default `nofollow noreferrer noopener`.
