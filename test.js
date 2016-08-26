var test = require('tape')
var condense = require('./index').condense
var expand = require('./index').expand
var getLetter = require('./index').getLetter

test('getLetter()', t => {
  t.equal(getLetter(0), 'a')
  t.equal(getLetter(4), 'e')
  t.equal(getLetter(26), 'aa')
  t.equal(getLetter(27), 'ab')
  t.equal(getLetter(52), 'ba')
  t.end()
})

test('condense()', t => {
  t.equal(condense(['id'], '{"id":1}'), '{a:1}')
  t.equal(condense(['id'], '{"k":2,"id":1}'), '{"k":2,a:1}', 'string keys')
  t.equal(condense(['k'], '{"k":2,"id":{"k":4}}'), '{a:2,"id":{a:4}}', 'repeating string keys')
  t.equal(condense([], '{"1":100,"2":200}'), '{1:100,2:200}', 'numeric keys')
  t.end()
})

test('expand()', t => {
  t.equal(expand(['id'], '{a:1}'), '{"id":1}')
  t.equal(expand(['id'], '{"k":2,a:1}'), '{"k":2,"id":1}', 'string keys')
  t.equal(expand([], '{1:100,2:200}'), '{"1":100,"2":200}', 'numeric keys')
  t.end()
})
