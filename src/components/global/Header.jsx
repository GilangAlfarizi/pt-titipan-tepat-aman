import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ path: "/", label: "Beranda" },
		{ path: "/services", label: "Layanan" },
		{ path: "/about", label: "Tentang Kami" },
	];

	return (
		<nav className="bg-neutral-primary fixed w-full z-20 top-0 border-b border-default">
			<div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
				{/* Logo */}
				<div className="flex items-center space-x-3">
					<img
						src="https://ik.imagekit.io/ferdyawans/pt-titipan-tepat-aman-revisi.png"
						className="h-7"
						alt="PT Titipan Tepat Aman Logo"
					/>
					<span className="lg:text-xl sm:text-xs text-heading font-semibold whitespace-nowrap">
						PT Titipan Tepat Aman
					</span>
				</div>

				{/* Right actions */}
				<div className="flex md:order-2 space-x-3">
					{/* CTA (desktop only) */}
					<button className="hidden md:inline-flex text-white bg-brand hover:bg-brand-strong rounded-base text-sm px-3 py-2">
						Hubungi Kami
					</button>

					{/* Hamburger */}
					<button
						onClick={() => setIsOpen((prev) => !prev)}
						className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden hover:bg-neutral-secondary-soft rounded-base">
						<svg className="w-6 h-6" viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								d="M5 7h14M5 12h14M5 17h14"
							/>
						</svg>
					</button>
				</div>

				{/* NAV MENU */}
				<div
					className={`
            ${isOpen ? "flex" : "hidden"}
            absolute top-full right-4 mt-2 w-56 flex-col
            bg-neutral-secondary-soft border border-default rounded-base shadow-md

            md:static md:flex md:w-auto md:flex-row
            md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:mt-0
          `}>
					<ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 font-medium">
						{navItems.map(({ path, label }) => (
							<li key={path}>
								<NavLink
									to={path}
									onClick={() => setIsOpen(false)}
									className={({ isActive }) =>
										`
                      block py-2 px-3
                      ${
												isActive
													? "text-fg-brand font-semibold"
													: "text-gray-700 hover:text-fg-brand"
											}
                    `
									}>
									{label}
								</NavLink>
							</li>
						))}

						{/* CTA (mobile only) */}
						<li className="mt-3 md:hidden">
							<button
								onClick={() => setIsOpen(false)}
								className="w-full text-white bg-brand hover:bg-brand-strong rounded-base text-sm px-3 py-2">
								Hubungi Kami
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
