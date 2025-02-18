import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
import ProductList from '../components/ProductList';
import { Carousel } from 'react-bootstrap';
import BrandFilter from '../components/BrandFilter';  
import FlashDeals from '../components/FlashDeals';

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [flashDeals, setFlashDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFlashDeals([
      { id: 1, title: 'Flash Deal 1', endTime: new Date().getTime() + 3600000 },
      { id: 2, title: 'Flash Deal 2', endTime: new Date().getTime() + 7200000 },
    ]);
  }, []);

  const formatTime = (time) => {
    const totalSeconds = Math.floor((time - Date.now()) / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const isNewArrival = (stock) => {
    return stock <= 10;
  };

  const newArrivals = items.filter((product) => isNewArrival(product.stock));

  const filteredProducts = items.filter(
    (product) =>
      (!selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      product.price >= selectedPriceRange[0] &&
      product.price <= selectedPriceRange[1] &&
      (selectedRating === 0 || product.rating >= selectedRating) &&
      (!selectedBrand || (product.brand && product.brand.toLowerCase() === selectedBrand.toLowerCase())) 
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    if (sortOrder === 'price') {
      return a.price - b.price;
    }
    if (sortOrder === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  if (status === 'loading') return <div className="text-center py-8">Loading...</div>;
  if (status === 'failed') return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  const featuredProducts = items.filter((product) => product.rating >= 4.5);

  return (
    <div className="container mx-auto p-1 bg-gradient-to-b from-[#0A141B] to-[#9CF6F6] rounded-lg">
    <h1 className="featured-products">
  Featured Products
</h1>



      <div className="carousel-container">
      <Carousel className="rounded-lg overflow-hidden shadow-lg">
        {featuredProducts.map((product) => (
          <Carousel.Item key={product.id} className="carousel-item">
            <img
              className="carousel-image"
              src={product.thumbnail}
              alt={product.title}
            />
            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-caption-title">{product.title}</h3>
              <p className="carousel-caption-description">{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      <div className='flex justify-center ' style={{marginTop:'3em',fontWeight: 'bold'}}>
      <FlashDeals />
      </div>
     

      <h2 className="text-3xl font-semibold text-center text-[#FF7477] mb-4" style={{ color: '#B5D6D6' ,fontWeight: 'bold',marginTop:'2em'}}>New Arrivals</h2>
      <ProductList products={newArrivals} />

      {/* <h2 className="text-3xl font-semibold text-center text-[#FF7477] mb-4">Flash Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashDeals.map((deal) => (
          <div key={deal.id} className="bg-[#CEB5B7] shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-[#0A141B]">{deal.title}</h3>
            <p className="text-[#0A141B]">
              Time remaining: <span className="font-semibold">{formatTime(deal.endTime)}</span>
            </p>
          </div>
        ))}
      </div> */}



      <div className="mb-6 mt-6 flex flex-wrap justify-center gap-4 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-4 w-full button-container">
          <button onClick={() => setSelectedCategory('beauty')} className="w-full md:w-auto bg-[#FF7477] text-white px-5 py-2 rounded-lg hover:bg-[#B5D6D6] transition button-beauty">
            Beauty
          </button>
          <button onClick={() => setSelectedCategory('groceries')} className="w-full md:w-auto bg-[#0A141B] text-white px-5 py-2 rounded-lg hover:bg-[#9CF6F6] transition button-groceries">
            Groceries
          </button>
          <button onClick={() => setSelectedCategory('furniture')} className="w-full md:w-auto bg-[#B5D6D6] text-[#0A141B] px-5 py-2 rounded-lg hover:bg-[#FF7477] transition button-furniture">
            Furniture
          </button>
          <button onClick={() => setSelectedCategory('fragrances')} className="w-full md:w-auto bg-[#9CF6F6] text-[#0A141B] px-5 py-2 rounded-lg hover:bg-[#CEB5B7] transition button-fragrances">
            Fragrances
          </button>
          <button onClick={() => setSelectedCategory('')} className="w-full md:w-auto bg-[#CEB5B7] text-[#0A141B] px-5 py-2 rounded-lg hover:bg-[#FF7477] transition button-all-categories">
            All Categories
          </button>
        </div>

     
        
         <div className="mb-6 mt-6 flex flex-wrap justify-center space-x-4 gap-4">
    
      <BrandFilter setSelectedBrand={setSelectedBrand} />

  
      {selectedBrand && <p>Selected Brand: {selectedBrand}</p>}
    </div>

        <div className="flex flex-col items-center">
          <label className="text-white mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={selectedPriceRange[1]}
            onChange={(e) => setSelectedPriceRange([0, e.target.value])}
            className="w-full mb-2"
          />
          <p className="text-white">Price: ${selectedPriceRange[0]} - ${selectedPriceRange[1]}</p>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-white mb-2">Min Rating</label>
          <input
            type="number"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="border px-2 py-1 rounded-md"
            placeholder="Min Rating"
          />
        </div>

        <div className="flex flex-col items-center">
          <label className="text-white mb-2">Sort By</label>
          <select onChange={(e) => setSortOrder(e.target.value)} className="border px-2 py-1 rounded-md">
            <option value="newest">Newest</option>
            <option value="price">Price (Low to High)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-center text-[#FF7477] mb-4">All Products</h2>
      <ProductList products={currentProducts} />
      <div className="pagination-container">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="pagination-button"
  >
    Previous
  </button>
  <span className="pagination-text">
    {currentPage} of {totalPages}
  </span>
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    className="pagination-button"
  >
    Next
  </button>
</div>

    </div>

  );
};

export default Home;