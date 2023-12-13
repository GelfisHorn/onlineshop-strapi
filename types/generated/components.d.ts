import type { Schema, Attribute } from '@strapi/strapi';

export interface VariantVariant extends Schema.Component {
  collectionName: 'components_variant_variants';
  info: {
    displayName: 'variant';
    description: '';
  };
  attributes: {
    desdePulgadas: Attribute.Integer & Attribute.Required;
    hastaPulgadas: Attribute.Integer & Attribute.Required;
    precio: Attribute.Decimal & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'variant.variant': VariantVariant;
    }
  }
}
