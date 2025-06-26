import Header from '../components/Header';
import ProductPage from '../components/ProductPage';
import BreadcrumbBar from '../components/BreadcrumbBar';

const Index = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e5e7eb'}}>
      <Header />
      <BreadcrumbBar />
      <ProductPage />
    </div>
  );
};

export default Index;