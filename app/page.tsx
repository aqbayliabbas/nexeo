import Navbar from "./Navbar";
import Header from "./Header";
import BrandsSection from "./BrandsSection";
import BenefitsSection from "./BenefitsSection";
import ReviewsSection from "./ReviewsSection";
import ProductsSection from "./ProductsSection";
import FooterSection from "./FooterSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        <Header />
        <BrandsSection />
        <BenefitsSection />
        <ReviewsSection />
        <ProductsSection />
        <FooterSection />
      </div>
    </>
  );
}
