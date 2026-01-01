export const ServicesDetail = ({ imgSrc, imgAlt, title, description }) => {
	return (
		<section className="mx-auto max-w-7xl lg:pt-8 lg:mt-8 mt-4 bg-neutral-primary">
			<div className="bg-neutral-secondary-soft border border-default rounded-base p-8 mx-8 md:p-12 lg:flex items-start">
				<div className="lg:me-8 mx-auto">
					<img
						src={imgSrc}
						alt={imgAlt}
						className="lg:max-w-2xs rounded object-cover"
					/>
				</div>

				<div className="flex-1">
					<h1 className="text-heading tracking-tighter text-3xl font-bold lg:mb-6 mb-4 lg:mt-0 mt-4">
						{title}
					</h1>
					<p className="md:text-lg font-normal text-body">{description}</p>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetail;
