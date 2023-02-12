import React from 'react';


const Budget = () => {

    return (

        <div className="h-auto bg-white rounded-xl p-7 font-bold text-grey-letter">
            <div>
                <h1 className='font-bold text-xl'>Set limit of budget:</h1>
                <div className='text-green-light text-lg'>
                    <span>200€</span><span>&nbsp;Monthly</span>
                </div>
            </div>
            <div className='pt-5'>
                <h1 className='font-bold text-xl'>Next time you can spend:</h1>
                <div className='text-green-light text-lg'>
                    <span>9€</span>
                </div>
            </div>



        </div>


    );


}

export {Budget}