const { Router } = require('express')
const { reset } = require('nodemon')
const { getAddress } = require('./Controllers/GetAddress.Controller')
const axios = require('axios').default
const route = Router()

route.get('/', (req, res) => {
    return res.status(200).send({
        api: 'get address by location',
        author: 'Brandon Sousa da Silva'
    })
})

route.get('/api/address/:lat,:lng', getAddress)

module.exports = route