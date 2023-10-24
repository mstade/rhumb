import test from 'tape'
import {rhumb} from '../../src/rhumb.js'

test("Routing should detect /foo/{bar} and /foo(/{maybe}) as ambiguous", function(t) {
  t.plan(1)
  var router = rhumb.create()

  router.add("/foo/{bar})", function() {})

  t.throws(function() {
    router.add("/foo/{maybe})", function() {})
  })
})
