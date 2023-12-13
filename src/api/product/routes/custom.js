"use strict"

module.exports = {
    routes: [
        {
            method: "PUT",
            path: '/products/update-stock/:id',
            handler: 'product.updateStock',
            config: {
                policies: []
            }
        }
    ]
}