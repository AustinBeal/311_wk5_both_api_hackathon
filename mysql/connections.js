const mysql = require('mysql')

class Connection {
    constructor() {
      if (!this.pool) {
        console.log('creating connection...')
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: 'den1.mysql3.gear.host',
          user: 'hackathonbase',
          password: 'Allhailm8!',
          database: 'hackathonbase',
          multipleStatements: true
        })
  
        return this.pool
      }
  
      return this.pool
    }
  }

const instance = new Connection()

module.exports = instance