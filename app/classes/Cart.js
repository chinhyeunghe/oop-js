class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        const tonTai = this.items.find(item => item.product.id === product.id);
        
        if(tonTai) {
            tonTai.quantity++;
        }else {
            this.items.push(new CartItem(product));
        }
    } 

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id != productId);
    }

    getTotalPrice() {
        return this.items.reduce((sum, item) => {
           return sum + item.getTotal()
        }, 0);

    }

    clearCart() {
        this.items = [];
    }

    getListCart() {
        return this.items;
    }

    printCart() {
        console.log('🛒 Giỏ hàng hiện tại:');
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.product.name} x ${item.quantity} = ${item.getTotal().toLocaleString()}đ`);
            // console.log(item);
            
        })
        console.log(`👉 Tổng cộng: ${this.getTotalPrice().toLocaleString()}đ`);
    }
}