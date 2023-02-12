import { useState, useEffect } from 'react'
import React, { Component } from "react";
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Transaction from './pages/Transactions/Transaction';
import Account from './pages/Accounts/Account';
import './App.css';
// import db from './components/Database/db';

function App() {
  
  // States 
  // Sidebar mobile open - close
  const [open, setOpen] = useState(false);
  const SideBarOpen = () => setOpen(!open);
  const [accounts, setData] = useState([]);
  console.log(accounts);
  // Database local saved data
  // Database object extracted
  // const [database, setDatabase] = useState(new DB());
  // // Data that will be saved
  // const [data, setData] = useState({});


  // extract data saved from the database and insert it into our empty object
  // It will happend in the background
  // useEffect(() => {

  //   const allData = database.getAllNotes();

  //   setData(allData);

  // })

  // // This saves data in the local database
  // handleSave = (data) => {

  //   let res = database.createData(data);



  // }
  
  // Get the new data from the account page and keep the old accounts in the array
  function addAccounts(account){

   
    setData([account, ...accounts]);
  
  }
  
  return (
    <>
      <Header open={SideBarOpen}/>
      <SideBar status={open}/>
      <Routes>
        <Route exact path='/' element={<Dashboard accounts={accounts}/>}/>
        <Route exact path='/transaction' element={<Transaction />}/>
        <Route exact path='/account' element={<Account accounts={accounts} onSubmit={addAccounts}/>}/>
      </Routes>
    </>
  )
}

export default App;

// Implement database and extract the data from each component and save it offline
// Get the data from the database loop from it and fill small containers in the correct components