const Service = require('../models/service')

function getAllServices(req, res) {
    Service.find()
        .then((services) => {
            res.status(200).json(services);
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error. Please try again.' });
        });
}

function getServiceById(req, res) {
    Service.findById(req.params.id)
        .then((service) => {
            if (!service) {
                return res.status(404).json({ message: 'Service not found.' });
            }
            res.status(200).json(room);
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error. Please try again.' });
        });
}

module.exports = { 
    getAllServices,
    getServiceById
}