import path from 'path'
import fs from 'fs'

const envFile = path.join(__dirname, './.env')

if (fs.existsSync(envFile)) {
  require('node-env-file')(envFile)
}

const Config = {
  port: process.env.API_PORT || 9502,
  ip: process.env.IP || '0.0.0.0'
}

module.exports = Config
