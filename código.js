const products = [
    { id: 1, name: 'Produto 1', price: 100, image: 'images/produto1.jpg' },
    { id: 2, name: 'Produto 2', price: 200, image: 'images/produto2.jpg' },
    { id: 3, name: 'Produto 3', price: 300, image: 'images/produto3.jpg' },
];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('produto');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>R$ ${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });
}

function searchProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    console.log('Produto adicionado ao carrinho:', productId);
}

window.onload = function() {
    displayProducts(products);
};
