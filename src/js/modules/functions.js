export function isWebp() {
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
	}

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}
export function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (e) {
		let elem = e.target.closest(selector)
		if (elem !== null && box.contains(elem)) {
			handler.call(elem, e)
		}
	})
}





