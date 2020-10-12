import React from 'react';

import { useParams } from 'react-router-dom';

const LogicUnitProduct = () => {

    let {url} = useParams()
    console.log("Logic Unit:",url);

    return (
        <div className="container">
            <h1 className="text-center font-weight-bold py-3">Logic Unit Products</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 1</h2>
                        <p>Product 1 description</p>
                        <p>Product 1 pricing</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 2</h2>
                        <p>Product 2 description</p>
                        <p>Product 2 pricing</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 3</h2>
                        <p>Product 3 description</p>
                        <p>Product 3 pricing</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 4</h2>
                        <p>Product 4 description</p>
                        <p>Product 4 pricing</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 5</h2>
                        <p>Product 5 description</p>
                        <p>Product 5 pricing</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="product">
                        <h2>Product 6</h2>
                        <p>Product 6 description</p>
                        <p>Product 6 pricing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogicUnitProduct;