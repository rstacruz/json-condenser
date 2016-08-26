# json-condenser

Condenses JSON by shortening literals and numbers.

```js
const KEYS = ['id', 'name', 'email', 'role', 'admin']
const json = [{"id":1,"name":"John","email":"john@gmail.com","role":"admin"}]

let payload = condense(KEYS, json)
//=> [{e:1,f:"John",g:"john@gmail.com",h:i}]

expand(KEYS, payload)
//=> [{"id":1,"name":"John","email":"john@gmail.com","role":"admin"}]
```

[![Status](https://travis-ci.org/rstacruz/json-condenser.svg?branch=master)](https://travis-ci.org/rstacruz/json-condenser "See test builds")

## API

### condense

> `condense(keys, json)`

Condenses a JSON string `json` by shortening the keys in `keys` into letters.

- `keys` *(Array of strings)* - key names to be abbreviated.
- `json` *(String)* - A JSON string as given by [JSON.stringify()](http://devdocs.io/javascript/global_objects/json/stringify). It should not have any whitespaces.


### expand

> `expand(keys, condensedJson)`

Expands an output of [condense()](#condense).

- `keys` *(Array of strings)* - The same keys passed onto *condense()*.
- `condensedJson` *(String)* - The output of *condense()*.

## Thanks

**json-condenser** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/json-condenser/contributors
