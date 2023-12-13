'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', {
    async updateStock(ctx) {
        const { id } = ctx.params;

        const model = strapi.query('api::product.product');
        const actualProduct = await model.findOne({ where: { id } });

        if (actualProduct && actualProduct.stock > 0) {
            // Crea un objeto con las propiedades que deseas actualizar
            const updatedProductData = {
                stock: actualProduct.stock - 1,
                // Agrega otras propiedades si es necesario
            };

            // Utiliza el objeto creado en el método update
            await model.update({ where: { id }, data: updatedProductData });

            return ctx.send({
                message: 'Updated successfully',
            });
        } else {
            return ctx.send({
                message: 'There was an error updating',
            });
        }
    }
});
