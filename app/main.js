// khởi tạo sản phẩm

const p1 = new Product(1, 'Sản phẩm A', 1000);
const p2 = new Product(2, 'Sản phẩm B', 2000);
const p3 = new Product(3, 'Sản phẩm C', 3000);

// khởi tạo giỏ hàng

const myCart = new Cart();

myCart.addProduct(p1);
myCart.addProduct(p2);
myCart.addProduct(p3);

// in ra giỏ hàng

myCart.printCart();