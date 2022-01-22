const renderHeaderMenu = () => {
  const container = `<nav role='navigation'>
		<div id="backArrow"><i class="fas fa-arrow-left"></i><div>
		<div id="menuToggle">
			<input type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu">
				<a class="menu-link" href="#">
					<li>Home</li>
				</a>
				<a class="menu-link"href="#">
					<li>Portfolio</li>
				</a>
				<a class="menu-link"href="#">
					<li>About</li>
				</a>
				<a class="menu-link" href="#">
					<li>Contact</li>
				</a>
			</ul>
		</div>
	</nav>`;

  document.querySelector(".header-menu").innerHTML = container;
};

export { renderHeaderMenu };
