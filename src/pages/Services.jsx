import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Jumbotron from "../components/services/Jumbotron";
import ServicesDetail from "../components/services/ServicesDetail";

const Services = () => {
	return (
		<>
			<Header />
			<Jumbotron />
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-1"
				title="Layanan Export Terintegrasi"
				description="Kami menyediakan layanan export terintegrasi untuk berbagai jenis komoditas ke berbagai negara tujuan. Mulai dari pengurusan dokumen, kepabeanan, hingga pengiriman internasional, seluruh proses ditangani secara profesional untuk memastikan barang Anda sampai dengan aman dan tepat waktu."
			/>
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-2"
				title="Layanan Import Profesional"
				description="Kami membantu proses import barang dari berbagai negara dengan pengurusan dokumen yang lengkap dan sesuai regulasi. Tim profesional kami memastikan kelancaran proses bea cukai hingga barang tiba di lokasi Anda."
			/>
			<ServicesDetail
				imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				imgAlt="service-3"
				title="Freight Forwarding & Customs Clearance"
				description="Layanan freight forwarding dan customs handling kami dirancang untuk meminimalkan risiko dan waktu pengiriman. Dengan pengalaman dan keahlian di bidang logistik, kami memberikan solusi yang efisien dan terpercaya."
			/>
			<Footer />
		</>
	);
};

export default Services;
