import React from 'react';

const TotalBalance = (props) => {

    let sum = 0;
    const account = props.accounts?.map(el => el.account);
    const transaction = props.transactions?.map(el => el.record);
    console.log(transaction);
    

    // Calculate total sum of money from all the accounts in USD
    const totalBalanceUSD = (sum) => {
        
        account?.filter(el => el.currency == 'USD').map((el) => {

                let money = parseInt(el.ammounts);
                sum += money;
        })
        
        return sum;
        
    }

    // Calculate total sum of money from all the accounts in EUR
    const totalBalanceEUR = (sum) => {
        
        account?.filter(el => el.currency == 'EUR').map((el) => {

                let money = parseInt(el.ammounts);
                sum += money;
        })
        
        return sum;
        
    }

  

    return (
        <div className='h-auto bg-white rounded-xl p-7 font-bold text-grey-letter'>
           <div className='font-bold text-lg w-full'>
                
                <h1>Total Balance</h1>
                <div className='flex justify-between w-1/2'>
                    <span id="USD" className='text-lg text-green-light'>{totalBalanceUSD(sum)}USD</span>
                    <span id="EUR" className='text-lg text-green-light'>{totalBalanceEUR(sum)}EUR</span>
                </div>
            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl'>Bank account</h1>
               
                {account?.filter(el => el.type == 'Bank Account').map((el) => {
                    
                    
                    return(

                        <div className='flex place-content-between mt-4'>
                        
                            <p>{el.name}</p>
                            <span className='text-lg text-green-light'>{el.ammounts + el.currency}</span>
                            
                        </div> 

                    )

                })}
                    
                    


                
                

            </div> 
           <div className='font-bold w-full my-8'>
                
                <h1 className='bg-gray-300 rounded-lg p-2 text-xl'>Cards</h1>
                {account?.filter(el => el.type == 'Card').map((el) => {

                    return(
                    
                        <div className='flex place-content-between mt-4'>
                        
                            <p>{el.name}</p>
                            <span className='text-lg text-green-light'>{el.ammounts + el.currency}</span>
                            
                        </div> 

                    )

                })}

            </div> 



        </div>
    )
}

export {TotalBalance};