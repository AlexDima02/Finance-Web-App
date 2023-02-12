import React from 'react'
import { useState } from 'react';
import Transaction from '../pages/Transactions/Transaction';

const AddExpense = (props) => {

  // For each object we need to create a 
  //    new transaction container after we click on AddExpense btn
  // Get the inputs from the expense container
  const [data, setData] = useState({
    
    id: "",
    from: "",
    money: "",
    date: ""

  });


  // What is happening when we click on AddExpense btn
  // Add data from the inputs inside the array
  function handleStoreInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, from: e.target.value });
  
    }
  function handleMoneyInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, money: e.target.value });
  
    }
  function handleDateInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setData({ ...data, date: e.target.value });
  
    }

    function handleSubmit(e) {
        
        e.preventDefault(); // prevents browser refresh
        // trim() gets rid of string whitespace
        
          props.onSubmit({ ...data, id: Math.floor(Math.random() * 1000) });
          setData({ ...data });
        
    }



  return (
    <div className='h-max bg-white rounded-xl p-7 font-bold text-grey-letter text-lg flex-1 md:grid '>
        <form className='' onSubmit={handleSubmit} action="">
            <h1 className='text-xl font-bold text-grey-letter mb-10'>Expenses</h1>
            <div className='flex flex-col mb-3 text-lg md:flex-row md:place-content-between'>
                <div className='flex flex-col mb-4 pb-2'>
                    <label htmlFor="from">From</label>
                    <select onChange={handleStoreInputChange} className='border-2 border-slate-200' name="" id="">
                        <option value='Card'>Card</option>
                        <option value='Bank Account'>Bank account</option>
                    </select>
                </div>
                
                <div className='flex flex-col relative align-bottom place-content-center'>
                    <label className='absolute z-10 right-[1px] bg-slate-200 px-4 py-[2px]' htmlFor="currency">USD</label>
                    <input onChange={handleMoneyInputChange} className='border-2 border-slate-200 px-1' type="number" name='currency'/>
                </div>
            </div>
            <div className='mb-4'>

                <input onChange={handleDateInputChange} className='w-full' type="date" />

            </div>
            <button onClick={handleSubmit} className='hover:bg-red-400 hover:transition-colors duration-150 bg-red-brown text-white text-lg rounded-lg w-full py-3'>Add Expense</button>
        </form>
        
    </div>
  )
}

export {AddExpense};