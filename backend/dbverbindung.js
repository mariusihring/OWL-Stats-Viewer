const express = require('express')
const mysql = require('mysql')

const pool = mysql.createPool({
  acquireTimeout: 5000,
  conectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'owl stats',
})

module.exports.query = (sql, args) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results, field) => {
      if (error) {
        reject(error.sqlMessage)
      }
      resolve(results)
    })
  })
}
