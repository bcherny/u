Basic, underscore-like utilities.
	
	u =

## _.each
functional, generic iterator

		each: (collection, fn) ->

			if typeof collection.length isnt 'undefined'
				for value, key in collection
					fn value, key
			else
				for own key, value of collection
					fn value, key

			undefined

## _.extend
augment an object with one or more other objects (mutates the first object passed)

		extend: (obj, others...) ->

			if obj and others
				for other in others
					for key of other
						obj[key] = other[key]

			obj

## _.fluent
make any function return `this` for easy functional style chainability

		fluent: (fn) ->

			->
				fn.apply @, arguments
				@

## _.one
return the first key in an object (order not guaranteed, as objects are automatically sorted by key in some browsers)

		one: (collection) ->

			return id for id of collection

## classList
manipulate `Element.classList` in an Internet Explorer-compatible way

		classList:

			add: (element, className) ->

				# prevent duplicating classNames
				if not _.classList.contains element, className
					if element.className.baseVal?
						element.setAttribute 'class', "#{element.className.baseVal} className"
					else
						element.className += " #{className}"

			remove: (element, className) ->

				regex = new RegExp "(^|\\s)#{className}(?:\\s|$)"

				if element.className.baseVal?
					element.setAttribute 'class', (element.className.baseVal + '').replace regex, '$1'
				else
					element.className = (element.className + '').replace regex, '$1'

			toggle: (element, className) ->

				if _.classList.contains element, className
					verb = 'remove'

				else
					verb = 'add'

				_.classList[verb] element, className

			contains: (element, className) ->

				if element.className.baseVal?
					cName = element.className.baseVal
				else
					cName = element.className

				(cName.indexOf className) > -1