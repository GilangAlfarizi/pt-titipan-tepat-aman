export const ServicesDetail = ({ imgSrc, imgAlt, title, description }) => {
	return (
		<section className="mx-auto max-w-screen-xl lg:pt-8 lg:mt-8 bg-neutral-primary">
			<div className="bg-neutral-secondary-soft border border-default rounded-base p-8 md:p-12 flex">
				<div className="me-8">
					<img className="rounded" src={imgSrc} alt={imgAlt} />
				</div>
				<div>
					<h1 className="text-heading tracking-tighter text-3xl font-bold my-6">
						{title}
					</h1>
					<p className="md:text-lg font-normal text-body mb-6">{description}</p>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetail;
