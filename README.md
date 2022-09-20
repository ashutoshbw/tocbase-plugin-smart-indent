# tocbase-plugin-smart-indent

<a href="https://bundlephobia.com/package/tocbase-plugin-smart-indent" target="_blank"><img src="https://img.shields.io/bundlephobia/minzip/tocbase-plugin-smart-indent?color=green" alt="Minimized and gzipped size"></a>

A [tocbase](https://github.com/ashutoshbw/tocbase) plugin for smartly adding indentation to numbered ToC items. Here is a before after photo:

![A before after of tocbase smart indent plugin](./before-after.png)

Above the offset is zero. If you want them to go a little more inward(right) or outward(left) you can do that with the `offset` option.

**Note**: This plugin only works if ToC numbers are enabled by `tocbase` using the `bTocNum` option.

## Requirements
`tocbase` version v8.4.5 or up.

## Installing
### From CDN
In your HTML page's `<head>`, include the following alongside `tocbase` library:
```html
<script  src="https://unpkg.com/tocbase-plugin-smart-indent@3.0.3/dist/cdn.umd.min.js"></script>
```

**Note**: It is recommend to use a fixed version(like above) instead of `latest` keyword, to avoid any troubles if breaking changes happen.

This will result in a `smartIndent` variable holding the plugin function.

### Using node and bundler
To install it, run in your terminal:
```
npm i tocbase-plugin-smart-indent
```

Import it in your script like below if you are using ESM syntax:
```js
import smartIndent from "tocbase-plugin-smart-indent";
```

You can also use common js syntax:
```js
const smartIndent = require("tocbase-plugin-smart-indent");
```

Follow your bundler's instructions for generating the output file and then load it in your HTML page through script tag to use it.

## Usage
```js
const toc = createToc({
  plugins: [smartIndent(), ],
});
```

To move the items a little inward, let's pass an `offset`:
```js
const toc = createToc({
  plugins: [
    smartIndent({ offset: "0.5rem" }),
  ],
});
```

## Options
### `offset`
Type: A string representing CSS length value.<br>
Default: `"0"`

With `offset` you can move the ToC sub lists left(with a negative value) or right(with a positive value).
