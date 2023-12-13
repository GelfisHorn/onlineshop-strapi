'use strict';

/**
 * discount-code controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::discount-code.discount-code', {
    async updateUses(ctx) {
        const { codigo } = ctx.request.body;

        const model = strapi.query('api::discount-code.discount-code');
        const actualCode = await model.findOne({ where: { codigo } });

        if (actualCode && actualCode.usos > 0) {
            // Crea un objeto con las propiedades que deseas actualizar
            const updatedProductData = {
                usos: actualCode.usos - 1,
                // Agrega otras propiedades si es necesario
            };

            // Utiliza el objeto creado en el método update
            await model.update({ where: { codigo }, data: updatedProductData });

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