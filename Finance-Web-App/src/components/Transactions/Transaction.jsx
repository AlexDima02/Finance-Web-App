import React from 'react'

const Transaction = (props) => {
    
// For each object we need to create 
//  a new transaction container after we click on AddExpense btn
  console.log(props.verify);

  return (
    <div className='flex place-content-between'>
       <div className='flex flex-col w-1/3 mt-10 font-bold text-lg'>
                    
                    <div className='w-10 h-10 object-contain'>
                        <img className='w-full h-full' src="./src/assets/icons8-hospital-insurance-96.png" alt="" />
                    </div>

                    <div className='text-lg'>
                        <h1></h1>
                        <p className='text-gray-400 text-sm'>{props.date}</p>
                    </div>

        </div>

                
        <div id='price' className='text-lg flex flex-col align-middle place-content-center'>
                    
                    <h1>-${props.money}</h1>

        </div>
    </div>
  )
}

export { Transaction }
