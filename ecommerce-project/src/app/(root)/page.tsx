import sampleData from '@/db/sample-data'
import React from 'react'
import { getLatestProducts } from '@/lib/actions/product.actions'

const Homepage = async () => {
    const latestProducts = await getLatestProducts();

    return (
        <>
            <ProductList 
                data={latestProducts.products}
                title="new arrivals"
                limit={4}
            />
        </>
    )
}

export default Homepage