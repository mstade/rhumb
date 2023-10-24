import test from 'tape'
import {rhumb} from '../../src/rhumb.js'

test("Parsing should find optional part at end of path", function(t){
  var out = rhumb._parse("/one/two(/three)")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "fixed", input: "one"}
    , { type: "fixed", input: "two"}
    , [ { type: "fixed", input: "three"} ]
    ]
  )
})

test("Parsing should find nested optional elements at end of path", function(t){
  var out = rhumb._parse("/one/two(/three/four(/five))")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "fixed", input: "one"}
    , { type: "fixed", input: "two"}
    , [ { type: "fixed", input: "three"}
      , { type: "fixed", input: "four"}
      , [ { type: "fixed", input: "five"} ]
      ]
    ]
  )
})

/*
TODO: later :)
test("should find optional elements anywhere in path", function(t){
  var out = rhumb._parse("/one/two(/three)/gogogo")

  t.plan(2)
  t.ok(out)
  t.deepEqual(out,
    [ { type: "fixed", input: "one"}
    , { type: "fixed", input: "two"}
    , [ { type: "fixed", input: "three"} ]
    , { type: "fixed", input: "gogogo"}
    ]
  )
})
*/
