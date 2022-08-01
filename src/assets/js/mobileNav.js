const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const headerText = document.getElementById('headerText');

burger.addEventListener('click', event => {
	if (body.classList.contains('show__sidebar')) {
		closeSidebar();
	} else {
		showSidebar();
	}
});

let listener = function () {
	console.log("asda")
	if (document.documentElement.clientWidth > 575) {
		closeSidebar();
	}
}

function showSidebar() {
	headerText.innerText = "Меню";
	body.classList.add('show__sidebar');
	window.addEventListener('resize', listener);
}

function closeSidebar() {
	headerText.innerText = "Отдел продаж";
	body.classList.remove('show__sidebar');
	window.removeEventListener('resize', listener)
}