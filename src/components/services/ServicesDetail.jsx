export const ServicesDetail = ({ imgSrc, imgAlt, title, description }) => {
	return (
		<section className="mx-auto max-w-screen-xl lg:pt-8 lg:mt-8 bg-neutral-primary">
			<div className="bg-neutral-secondary-soft border border-default rounded-base p-8 md:p-12 flex items-start">
				<div className="me-8">
					<img
						src={imgSrc}
						alt={imgAlt}
						className="max-w-2xs rounded object-cover"
					/>
				</div>

				<div className="flex-1">
					<h1 className="text-heading tracking-tighter text-3xl font-bold mb-6">
						{title}
					</h1>
					<p className="md:text-lg font-normal text-body">{description}</p>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetail;
