import {headerMenuEventListeners} from "../helpers/eventListeners"

const renderHeaderMenu = () => {
  const container = `<nav role='navigation'>
		<div id="backArrow"><i class="fas fa-arrow-left"></i><div>
		<div id="menuToggle">
			<input type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu">
				<a class="menu-link" >
					<li class="menu-table">Table</li>
				</a>
				<a class="menu-link">
					<li class="menu-basket">Basket</li>
				</a>
				<a class="menu-link">
					<li class="menu-cancel">Cancel</li>
				</a>
				
			</ul>
		</div>
	</nav>`;

  document.querySelector(".header-menu").innerHTML = container;
  headerMenuEventListeners();
};

export { renderHeaderMenu };
