import React from 'react';

const TotalBalance = () => {

    return (
        <div className='h-auto bg-white rounded-xl p-7 font-bold text-grey-letter'>
           <div className='font-bold text-lg w-full'>
                
                <h1>Total Balance</h1>
                <span className='text-lg text-green-light'>5000€</span>

            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl'>Bank account</h1>
                <div className='flex place-content-between mt-4'>
                    <p>Savings</p>
                    <span className='text-lg text-green-light'>2000€</span>


                </div>
                

            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl'>Cards</h1>
                <div className='flex place-content-between mt-4'>
                    <p>Mastercard *4569</p>
                    <span className='text-lg text-green-light'>1000€</span>

                </div>
                <div className='flex place-content-between mt-4'>
                    <p>Visa *3469</p>
                    <span className='text-lg text-green-light'>2000€</span>

                </div>

            </div> 



        </div>
    )
}

export {TotalBalance};