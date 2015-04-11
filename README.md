# steal-jasmine

Provides an easy way to run Jasmine tests using [StealJS](http://stealjs.com).

## Use

Add the Steal tag to your page:

```html
<script src="node_modules/steal/steal.js"
  data-main="test/test"></script>
```

Then import `steal-jasmine` in your`test/test.js` file and write your tests:

```js
import jasmineRequire from "steal-jasmine";

//Tests!
import foo from "bar";

it("A test", function(){
	expect(foo).toBe(true);
});
```

##License

MIT