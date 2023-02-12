import React from 'react'
import { Budget } from './components/Budget/Budget';
import { TotalBalance } from './components/TotalBalance/TotalBalance';
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { AddExpense } from '../../components/AddExpense';
import { useState, useEffect } from 'react';

function Dashboard(props) {

  // States
  // AddExpense object data
  const [datas, setData] = useState([]);
  
  // // Save it in the local storage
  // useEffect(() => {
  //   // fires when app component mounts to the DOM
  //   const storageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageData) {
  //     setData(storageData);
  //   }
  // }, []);

  // useEffect(() => {
  //   // fires when todos array gets updated
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(datas));
  // }, [datas]);

  // Add data in to the array
  function addData(data){

    // Adds new data at the beginning of the array
    setData([data, ...datas]);
  
  }
  
  

  return (
    <div className='max-w-6xl relative px-8 m-auto min-h-screen'>
      <div className='grid gap-4 grid-cols-1 grid-rows-4 md:grid-rows-3 md:grid-cols-2'>

          <Budget/>
          <TotalBalance />
          <AddExpense onSubmit={addData}/> 
          <TransactionList data={datas}/>
          

      </div>
    </div>
  )

}

export default Dashboard;

// Add Expense is dependent to his parent Dashboard
// Dashboard need some states that AddExpense can update 
//  and the data from the state needs to be put into the TransactionList
// For each data from the array map through and create a new container with new transactions