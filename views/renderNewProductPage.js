const renderNewProductPage = (productData) => {
    return `
      <html>
        <head>
          <title>Shop - Newest Product</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1 {
              color: #2c3e50;
            }
            nav {
              margin-top: 20px;
            }
            nav a {
              display: inline-block;
              margin-right: 10px;
              color: #3498db;
              text-decoration: none;
            }
            nav a:hover {
              text-decoration: underline;
            }
            .product-info {
              margin: 20px 0;
              padding: 15px;
              background-color: #f9f9f9;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <h1>Newest Product</h1>
          <div class="product-info">
            ${productData ? `New product data - ${productData}` : 'No new products available.'}
          </div>
          <nav>
            <a href='/'>Home</a>
            <a href='/product/add'>Add product</a>
            <a href='/logout'>Logout</a>
          </nav>
        </body>
      </html>
    `;
  };
  
  module.exports = renderNewProductPage;
   