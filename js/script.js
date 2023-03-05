document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItem = document.querySelectorAll('.nav-link')
	const navclose = document.querySelector('.navbar-collapse')

	allNavItem.forEach(item => item.addEventListener('click', () => navclose.classList.remove('show')))
	
	
})