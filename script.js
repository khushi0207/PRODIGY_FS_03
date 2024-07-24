// Get the product filters and list elements
const productFilters = document.querySelector('.product-filters');
const productList = document.querySelector('.product-list');

// Add event listeners to the filters
productFilters.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-price')) {
    // Filter by price
    const filteredProducts = Array.from(productList.children).filter((product) => {
      const price = product.querySelector('p.price').textContent;
      return price <= 20;
    });
    productList.innerHTML = '';
    filteredProducts.forEach((product) => {
      productList.appendChild(product);
    });
  } else if (e.target.classList.contains('filter-brand')) {
    // Filter by brand
    const filteredProducts = Array.from(productList.children).filter((product) => {
      const brand = product.querySelector('p.brand').textContent;
      return brand === 'Brand A';
    });
    productList.innerHTML = '';
    filteredProducts.forEach((product) => {
      productList.appendChild(product);
    });
  } else if (e.target.classList.contains('filter-category')) {
    // Filter by category
    const filteredProducts = Array.from(productList.children).filter((product) => {
      const category = product.querySelector('p.category').textContent;
      return category === 'Category 1';
    });
    productList.innerHTML = '';
    filteredProducts.forEach((product) => {
      productList.appendChild(product);
    });
  }
});