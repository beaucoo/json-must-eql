#Description

A [must.js](https://github.com/moll/js-must) assertion helper that uses [difflet](https://github.com/substack/difflet) to output exactly where actual and expected JSONs are not eql

#Use
Install via `npm install json-must-eql --save-dev`

<pre>
<code>
    require('must'); // Require assertion module and a peer dependency of this helper
    require('json-must-eql');

    var actual = {...};
    var expected = {...};
    actual.must.jsonEql(expected);
</pre>
</code>
When the JSONs are not eql, a typical exception will be thrown with colorized JSON explaining exact differences.
As per [difflet](https://github-camo.global.ssl.fastly.net/9cd040194f25dc692840cf4005b605d48a97b359/687474703a2f2f737562737461636b2e6e65742f696d616765732f73637265656e73686f74732f646966666c65745f636f6c6f72732e706e67):

* green for inserts
* blue for updates
* red for deletes

##Release Notes
v1.0.0 First

##License
(The MIT License)

Copyright (c) 2013-20* BeauCoo Technologies Inc. <help@beaucoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

