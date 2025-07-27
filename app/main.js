// khởi tạo sản phẩm
const listProduct = [
  new Product(1, "Sản phẩm A", 1000),
  new Product(2, "Sản phẩm B", 2000),
  new Product(3, "Sản phẩm C", 3000),
];
// khởi tạo giỏ hàng

const myCart = new Cart();

function renderCartView(cart) {
  const cartView = document.querySelector("#cart-view");
  let listCart = cart.getListCart();
  console.log(listCart);
  

  if (listCart.length == 0) {
    cartView.innerHTML = "<p>🛒 Giỏ hàng trống.</p>";
    return;
  }

  cartView.innerHTML = `
    <ul>
    ${listCart
      .map(
        (item) => `
        <li>${item.product.name} x${item.quantity} = ${item
          .getTotal()
          .toLocaleString()}đ <button data-rm=${item.product.id}>Xóa</button></li>
        `
      )
      .join("")}
    </ul>
    <p><strong>Tổng cộng:</strong> ${cart.getTotalPrice().toLocaleString()}đ</p>
  `;

  document.querySelectorAll("button[data-rm]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.dataset.rm);
      const productItem = listProduct.find((item) => item.id == id);
      cart.removeProduct(productItem.id);
      // show giỏ
      renderCartView(cart);
    });
  });
}

function renderProductView(listProduct) {
  const listView = document.querySelector("#product-list");
  if (Array.isArray(listProduct)) {
    if (listProduct.length == 0) {
      listView.innerHTML = "Không có sản phẩm nào";
      return;
    }
    listProduct.forEach((product, index) => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `<strong>${
        product.name
      }</strong> - ${product.price.toLocaleString()}đ
                            <button data-id=${product.id}>Thêm vào giỏ</button>
            `;
      listView.appendChild(div);
    });

    // gán sự kiện nút

    document.querySelectorAll("button[data-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = parseInt(button.dataset.id);
        const productItem = listProduct.find((item) => item.id == id);
        myCart.addProduct(productItem);
        // show giỏ
        renderCartView(myCart);
      });
    });
  }
}

renderProductView(listProduct);
