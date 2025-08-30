// Basic cart functionality
        document.addEventListener('DOMContentLoaded', function() {
            const cartCount = document.querySelector('.cart-count');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            let count = 0;
            
            // Add to cart functionality
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    count++;
                    cartCount.textContent = count;
                    
                    // Show confirmation
                    const product = this.closest('.product');
                    const productName = product.querySelector('.product-title').textContent;
                    
                    // Create notification
                    const notification = document.createElement('div');
                    notification.style.position = 'fixed';
                    notification.style.bottom = '20px';
                    notification.style.right = '20px';
                    notification.style.backgroundColor = 'var(--success)';
                    notification.style.color = 'white';
                    notification.style.padding = '10px 20px';
                    notification.style.borderRadius = '4px';
                    notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    notification.style.zIndex = '1000';
                    notification.textContent = `Added ${productName} to cart!`;
                    
                    document.body.appendChild(notification);
                    
                    // Remove notification after 3 seconds
                    setTimeout(() => {
                        notification.style.opacity = '0';
                        notification.style.transition = 'opacity 0.5s';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 500);
                    }, 3000);
                });
            });
            
            // Category filtering (placeholder)
            const categories = document.querySelectorAll('.category');
            categories.forEach(category => {
                category.addEventListener('click', function() {
                    const categoryName = this.querySelector('h3').textContent;
                    alert(`Showing products in ${categoryName} category`);
                });
            });
            
            // View details functionality (placeholder)
            const viewDetailsButtons = document.querySelectorAll('.view-details');
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const product = this.closest('.product');
                    const productName = product.querySelector('.product-title').textContent;
                    alert(`Viewing details for ${productName}`);
                });
            });
        });