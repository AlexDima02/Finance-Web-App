import PouchDB from 'pouchdb';

const database = require('pouchdb');


export default class db extends database{
    
    constructor(data){
        
        this.db = new PouchDB('data');
        


    }
  
    
    async showData() {

        let allData = await this.db.allDocs({   include_docs: true  });
        let data = {};
        
        allData.rows.forEach(n => data[n.id] = n.doc);
        
        return data;
    }

    async createData(someData){

        someData.createdAt = new Date();
        someData.updatedAt = new Date();


        const res = await this.db.post({...someData});

        return res;
    }
    
}


// This dont even being taken into consideration
// module.exports = Db;
// The problem is still that the module is not being exported because the class cant extend an empty object
