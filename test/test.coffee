
_ = require '../_'

exports =

	'each (object)': (test) ->

		items =
			one: 'foo'
			two: 'bar'
			tre: 'baz'

		accumulator = ''
		expected = 'foobarbaz'

		_.each items, (value) ->
			accumulator += value

		test.equal accumulator, expected

		do test.done

	'each (array)': (test) ->

		items = [1,1,2,3,5,8,13,21]
		accumulator = 0
		expected = 54

		_.each items, (value) ->
			accumulator += value

		test.equal accumulator, expected

		do test.done

	extend: (test) ->

		one =
			foo: 1
		two =
			bar: 2
		three =
			baz: 3
		four =
			baz: 4

		_.extend one, two, three, four

		test.equal one.foo, 1
		test.equal one.bar, 2
		test.equal one.baz, 4

		do test.done

	