const express = require('express')
const axios = require('axios')
var cors = require('cors')

const app = express()
app.use(cors())

const token = 'HOeNLZ2XghRQhifCHqHcunMrg0ASNeIQRKf0t2kAEi2FN9YQq2uaIukHrgzzqNWd'

app.get('/', (req, res) => {
	res.send({ hello: token})
})

app.get('/api/token', async (req, res) => {
	const resp = await axios.post('http://testcountingapi.jjfoodservice.com/api/token/v1/TokenObject', 
    { 
        headers: {
            'Content-Type': 'application/json' 
		},
		body: {
			"v": "V1"
		  }
	})
	 console.log(resp)
})

app.get('/api/areas', async (req, res) => {
	const resp = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Area/v1/All?ApiKey=TrKoMYSjArx5P1eg&icEmployee=00008190&icLocation=EN-MW&type=json&version=V1&token=${token}`)
	res.send(resp.data)
})

app.get('/api/zones', async (req, res) => {
	const id = req.query.id
	const resp = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Zone/v1/All?ApiKey=TrKoMYSjArx5P1eg&icArea=${id}&icEmployee=00008190&icLocation=EN-MW&token=${token}&type=json&version=V1`)
	res.send(resp.data)
})

app.get('/api/category', async (req, res) => {
	const id = req.query.id
	const resp = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Zone/v1/All?ApiKey=TrKoMYSjArx5P1eg&icArea=${id}&icEmployee=00008190&icLocation=EN-MW&token=${token}&type=json&version=V1`)
	res.send(resp.data)
})

app.listen(5000)

								//http://testcountingapi.jjfoodservice.com/api/Category/v1/All?ApiKey=TrKoMYSjArx5P1eg&icArea=DA&icEmployee=00008190&icLocation=EN-MW&icZone=MZ&token=ZLk_FDeXisim9_JHT4yzDryc6beqsKA7Z1zlaG3UJlYsOehtCHUbqLDlpLgr2ABS&type=json&version=V1