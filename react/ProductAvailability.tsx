import React from 'react'

import ClientSide from './ClientSide'
import ProductStockQuery from './ProductStockQuery'

function ProductAvailability() {
  return (
    <ClientSide>
      <ProductStockQuery />
    </ClientSide>
  )
}

export default ProductAvailability
