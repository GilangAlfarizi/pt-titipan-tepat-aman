import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Jumbotron from "../components/landing/Jumbotron";
import ServicesCard from "../components/landing/ServicesCard";
import Banner from "../components/landing/Banner";

const LandingPage = () => {
	return (
		<>
			<Header />
			<Jumbotron />
			<div className="flex justify-center gap-4">
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service1"
					title="Layanan Export"
					description="Pengiriman barang ke berbagai negara dengan proses yang aman dan terkontrol"
					button="Pelajari Lebih Lanjut"
					cardDetail="Kami menangani seluruh proses export mulai dari dokumentasi, kepabeanan, hingga pengiriman ke negara tujuan. Dengan jaringan mitra internasional, PT Titipan Tepat Aman memastikan barang Anda sampai dengan aman dan tepat waktu."
				/>
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service2"
					title="Layanan Import"
					description="Solusi import barang yang cepat, legal, dan efisien"
					button="Pelajari Lebih Lanjut"
					cardDetail="Kami membantu proses import barang dari berbagai negara dengan pengurusan dokumen yang lengkap dan sesuai regulasi. Tim profesional kami memastikan kelancaran proses bea cukai hingga barang tiba di lokasi Anda."
				/>
				<ServicesCard
					imgSrc="https://www.partbargain.com/wp-content/uploads/demo/placeholder.svg"
					imgAlt="service3"
					title="Freight & Customs Handling"
					description="Pengelolaan pengiriman dan kepabeanan secara profesional"
					button="Pelajari Lebih Lanjut"
					cardDetail="Layanan freight forwarding dan customs handling kami dirancang untuk meminimalkan risiko dan waktu pengiriman. Dengan pengalaman dan keahlian di bidang logistik, kami memberikan solusi yang efisien dan terpercaya."
				/>
			</div>
			<Banner />
      
			<Footer />
		</>
	);
};

export default LandingPage;
