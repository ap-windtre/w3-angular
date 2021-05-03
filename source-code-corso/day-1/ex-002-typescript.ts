(function() {

    interface Product {
        id: number;
        name: string;
        category: string;
        quantity: number;
        price: number;
    }

    enum ProductCategories {
        PASTA = 'pasta',
        SWEETS = 'sweets',
        VEGETABLES = 'vegetables'
    };

    interface ProductV2 {
        id: number;
        name: string;
        category: ProductCategories;
        quantity: number;
        price: number;
    }

    let myProduct: ProductV2;
    myProduct.id = 999;
    myProduct.name = 'Nutella biscuits';
    myProduct.category = ProductCategories.SWEETS;
    myProduct.price = 2.99;
    myProduct.quantity = 10;

})();