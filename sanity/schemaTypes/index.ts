import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { mainProduct } from './mainProduct'
import { admin } from './admin'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, mainProduct, admin],
}
