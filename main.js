window.onload = function () {
	const input = document.querySelector('input')
	const botonAgregar = document.querySelector('.agregar')
	const botonBorrar = document.querySelector('.borrar')
	const botonClear = document.querySelector('.clear')
	const lista = document.querySelector('.lista')

	const anterioresItems = []

	function agregarItem() {  
		const itemDelUsuario = input.value

		if (!anterioresItems.includes(itemDelUsuario)) {
			anterioresItems.push(itemDelUsuario)

			const nuevoElemento = document.createElement('div')
			nuevoElemento.append(itemDelUsuario)

			const botonBorrar = document.createElement('button')
			botonBorrar.innerHTML = 'X'

			botonBorrar.onclick = function () {
				anterioresItems.splice(anterioresItems.indexOf(itemDelUsuario), 1)

				lista.removeChild(nuevoElemento)
			}

			nuevoElemento.append(botonBorrar)

			lista.append(nuevoElemento)
		}
	}	 
	
	input.onkeydown = function (event) {
		if (event.key === 'Enter') {
			agregarItem()
		}
	}

	botonBorrar.onclick = function () {
		const itemDelUsuario = input.value

		if (anterioresItems.includes(itemDelUsuario)) {
			const indiceDelItemDelUsuario = anterioresItems.indexOf(itemDelUsuario)

			const elementoDelItemDelUsuario = document.querySelectorAll('.lista div') [indiceDelItemDelUsuario]

			anterioresItems.splice(anterioresItems.indexOf(itemDelUsuario), 1)
			lista.removeChild(elementoDelItemDelUsuario)
		}
	}

	botonAgregar.onclick = function () {
		agregarItem()
	}

	botonClear.onclick = function () {
		
	}
}

