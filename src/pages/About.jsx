import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

const About = () => {
	return (
		<>
			<Header />

			<main className="pt-24 pb-16 bg-neutral-primary">
				<div className="max-w-screen-xl mx-auto px-4 space-y-16">
					{/* Page Title */}
					<section className="text-center space-y-4">
						<h1 className="text-3xl md:text-4xl font-semibold text-heading">
							Tentang Kami
						</h1>
						<p className="max-w-2xl mx-auto text-body">
							PT Titipan Tepat Aman berkomitmen untuk memberikan layanan terbaik
							dalam bidang pengiriman dan penitipan barang secara aman,
							terpercaya, dan profesional.
						</p>
					</section>

					{/* Visi & Misi */}
					<section className="grid md:grid-cols-2 gap-8">
						{/* Visi */}
						<div className="border border-default rounded-base p-6 bg-neutral-primary-soft">
							<h2 className="text-xl font-semibold text-heading mb-3">Visi</h2>
							<p className="text-body leading-relaxed">
								Menjadi perusahaan jasa penitipan dan pengiriman terpercaya yang
								mengutamakan keamanan, ketepatan, dan kepuasan pelanggan di
								seluruh Indonesia.
							</p>
						</div>

						{/* Misi */}
						<div className="border border-default rounded-base p-6 bg-neutral-primary-soft">
							<h2 className="text-xl font-semibold text-heading mb-3">Misi</h2>
							<ul className="list-disc list-inside text-body space-y-2">
								<li>Memberikan layanan yang aman dan tepat waktu</li>
								<li>Mengutamakan kepuasan dan kepercayaan pelanggan</li>
								<li>Meningkatkan kualitas layanan secara berkelanjutan</li>
								<li>
									Menggunakan sistem kerja yang profesional dan transparan
								</li>
							</ul>
						</div>
					</section>

					{/* Gallery */}
					<section className="space-y-6">
						<h2 className="text-center text-2xl font-semibold text-heading">
							Galeri Kegiatan
						</h2>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{[
								"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
								"https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
								"https://images.unsplash.com/photo-1580674285054-bed31e145f59",
								"https://images.unsplash.com/photo-1580674285054-bed31e145f59",
							].map((src, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-base border border-default">
									<img
										src={src}
										alt="Gallery"
										className="h-40 w-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
							))}
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default About;
