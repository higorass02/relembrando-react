import React from 'react'

import Products from '../../data/products.js'

export  default props => {
    function getProdutosListItem(){
        return Products.map( prod => {
            return (
                <li key={prod.id}>
                    {prod.id} - {prod.name} = R$ {prod.price}
                </li>
            )
            
        })
    }
    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}