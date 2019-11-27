import axios from 'axios'

const token = 'UZ5UpPdz4bxnsH45wHkE6sjkbY2PckQgTBqZNJJF8lwctqWtDq00edfqIRf7vl0N'

export const getAreas = async () => {
	const resp = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Area/v1/All?ApiKey=TrKoMYSjArx5P1eg&icEmployee=00008190&icLocation=EN-MW&type=json&version=V1&token=${token}`)
	return resp.data.Data
}

export const getZones = async (area) => {
const data = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Zone/v1/All?ApiKey=TrKoMYSjArx5P1eg&icArea=${area}&icEmployee=00008190&icLocation=EN-MW&token=${token}&type=json&version=V1`)
return data.data.Data
}

export const getCategory = async (area, zone) => {
const data = await axios.get(`http://testcountingapi.jjfoodservice.com/api/Category/v1/All?ApiKey=TrKoMYSjArx5P1eg&icArea=${area}&icEmployee=00008190&icLocation=EN-MW&icZone=${zone}&token=${token}&type=json&version=V1`)
return data.data.Data
}

export const genToken = async () => {
	const data = await axios.get('http://localhost:5000/api/token')
return data
	
}


// export const getAreas = async () => {
//     const data = await axios.get('http://localhost:5000/api/areas')
// 	return data.data.Data
// }

// export const getZones = async (id) => {
// 	const data = await axios.get('http://localhost:5000/api/zones', { params: { id }})
// 	return data.data.Data
// }

// export const getCategory = async (id) => {
// 	const data = await axios.get('http://localhost:5000/api/category', { params: { id }})
// 	return data.data.Data
// }

// export const genToken = async () => {
//     const data = await axios.get('http://localhost:5000/api/token')
// 	return data
    
// }