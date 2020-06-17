const axios = require('axios').default

exports.getAddress = (req, res) => {
    const { lat, lng } = req.params
    axios.get('https://nominatim.openstreetmap.org/reverse?', {
        params: {
            crossOrigin: true,
            type: 'json',
            format: 'json',
            lat: lat,
            lon: lng,
            addressdetails: 1,
            'accept-language': 'pt-BR'
        }
    }).then(function (response) {
        return res.json(response.data.address)
    }).catch(function (error) {
        return res.json(error)
    })
}