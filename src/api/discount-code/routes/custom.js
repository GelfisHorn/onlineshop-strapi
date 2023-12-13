"use strict"

module.exports = {
    routes: [
        {
            method: "PUT",
            path: '/discount-codes/update-uses',
            handler: 'discount-code.updateUses',
            config: {
                policies: []
            }
        }
    ]
}