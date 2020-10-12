import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';


const data = [

]
const CompanyName = () => {

    const [data, setData] = useState([
        {
            ref: 'logicunit',
            name: 'Logic Unit',
            url: 'https://logic-unit.com/'
        },
        {
            ref: 'a',
            name: 'A Company',
            url: 'https://a.com'
        },
        {
            ref: 'b',
            name: 'B Company',
            url: 'https://b.com'
        }
    ])



    let { component } = useParams();
    console.log(component)
    console.log(data.logicunit)
    return (
        <div className="mt-5 text-center">
            {
                data.map((company, index) => {
                    return (
                        company.ref == component ?
                            <div key={index}>
                                <h1 className="py-2">Company Name : {company.name}</h1>
                                <h3 className="py-2">Company URL: {company.url}</h3>
                            </div>
                            : null

                    )
                })
                // data[component].ref === component ?
                //     <div>
                //         <h1>Company Name : {data[component].name}</h1>
                //         <h3>Company URL: {data[component].url}</h3>
                //     </div>
                //     : <NotFound />

            }
            {/* <h1>Company Name : {data[component].name}</h1>
            <h3>Company URL: {data[component].url}</h3> */}
            <h3>Params : {component}</h3>
        </div>

    )
}
export default CompanyName;