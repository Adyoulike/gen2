
function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}

exports.sidebarToggle = () => {
  Array.from(document.querySelectorAll("#click_filter, #close")).forEach((el) => {
    el.onclick = () => {
      document.querySelector("#wrapper").classList.toggle('menu_visible')
    }
  })
}

exports.tilesGeneration = (json) => {
	for(var i = 0; i < json.length; i++) {
		let el = document.createElement('div')
		let thumbnail = document.createElement('img')
		let logo = document.createElement('img')
		let footer = document.createElement('div')
		let text = document.createElement('div')
		let title = document.createElement('div')
		let category = document.createElement('div')

		setAttributes(el, {
			'class': 'tile',
			'data-shape': json[i].format.toLowerCase(),
			'data-color': json[i].geo.toLowerCase(),
			'data-category': json[i].category.toLowerCase(),
		})

		setAttributes(thumbnail, {
			'class': 'thumbnail',
			'data-src': json[i].thumbnail
		})

		setAttributes(footer, {
			'class': 'footer'
		})

		setAttributes(logo, {
			'class': 'logo',
			'data-src': json[i].logo
		})

		setAttributes(text, {
			'class': 'text-wrapper'
		})

		setAttributes(title, {
			'class': 'tile-title'
		})

		setAttributes(category, {
			'class': 'tile-category'
		})

		el.appendChild(thumbnail)
		el.appendChild(footer)
		footer.appendChild(logo)
		footer.appendChild(text)
		text.appendChild(title)
		title.innerHTML = json[i].brand_name.toLowerCase()
		text.appendChild(category)
		category.innerHTML = '#' + json[i].category.toLowerCase()

		document.getElementById('main_container').appendChild(el);
	}
}