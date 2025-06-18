const products = [
  {
    id: 1,
    name: "Statue of Jesus Christ",
    img: "images/product1.jpg",
    price: 10.00
  },
  {
    id: 2,
    name: "Cochabamba Temple",
    img: "images/product2.jpg",
    price: 15.00
  },
  {
    id: 3,
    name: "Santa Cruz Temple",
    img: "images/product3.jpg",
    price: 18.00
  },
  {
    id: 4,
    name: "Star Wars",
    img: "images/product4.jpg",
    price: 12.00
  },
  {
    id: 5,
    name: "Santa Cruz Temple v2",
    img: "images/product5.jpg",
    price: 20.00
  },
  {
    id: 6,
    name: "Keychains",
    img: "images/product6.jpg",
    price: 5.00
  },
  {
    id: 7,
    name: "Several Figures",
    img: "images/product7.jpg",
    price: 8.00
  },
  {
    id: 8,
    name: "Salt Lake Temple",
    img: "images/product8.jpg",
    price: 22.00
  }
];

let selectedProduct = null;

function renderProducts() {
  const list = document.getElementById('productList');
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="openModal(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function openModal(id) {
  selectedProduct = products.find(p => p.id === id);
  document.getElementById('modalTitle').textContent = selectedProduct.name;
  document.getElementById('modalPrice').textContent = `Price: $${selectedProduct.price.toFixed(2)}`;
  document.getElementById('quantity').value = 1;
  document.getElementById('size').value = 'small';
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
}

function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const size = document.getElementById('size').value;

  const item = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    img: selectedProduct.img,
    quantity: quantity,
    size: size,
    price: selectedProduct.price
  };

  const cart = JSON.parse(localStorage.getItem('cartProducts') || '[]');
  cart.push(item);
  localStorage.setItem('cartProducts', JSON.stringify(cart));
  closeModal();
  alert('Product added to cart!');
}

renderProducts();
