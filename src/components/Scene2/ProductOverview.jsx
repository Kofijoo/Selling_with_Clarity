import React from 'react'

function ProductOverview({ children }) {
  return (
    <div className="product-overview">
      <h2>Know What You're Selling.</h2>
      <p>Explore <span className="brand-name">Josh Agyekum's</span> core features to understand your value proposition</p>
      {children}
    </div>
  )
}

export default ProductOverview