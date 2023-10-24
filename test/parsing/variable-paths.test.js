import test from 'tape'
import {rhumb} from '../../src/rhumb.js'

test("Parsing should find single variable part", function(t) {
  var out = rhumb._parse("/{wibble}")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "var", input: "wibble" } ]
  )
})

test("Parsing should find multiple variable parts", function(t) {
  var out = rhumb._parse("/{wibble}/{wobble}")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "var", input: "wibble" }
    , { type: "var", input: "wobble" }
    ]
  )
})

test("Parsing should find variable and fixed parts", function(t) {
  var out = rhumb._parse("/{wibble}/bar/{wobble}")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "var", input: "wibble" }
    , { type: "fixed", input: "bar" }
    , { type: "var", input: "wobble" }
    ]
  )
})
