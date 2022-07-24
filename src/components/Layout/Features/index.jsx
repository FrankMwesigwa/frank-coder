import React from 'react'
import ProductCard from '../../Product'
import './styles.css'

const Features = () => {
  return (
    <div className="features">
        <div className="container">
            <div className="wrapper">
                <div className="column">
                <div className="sectop flexitem">
						<h2>
							<span className="circle"></span>
							<span>Featured Products</span>
						</h2>
					</div>
                    <div className="products main flexwrap">
                        <ProductCard images={'images/20.jpg'}/>
                        <ProductCard images={'images/21.jpg'}/>
                        <ProductCard images={'images/20.jpg'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features