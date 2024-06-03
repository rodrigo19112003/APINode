const { category } = require('../models');
let self = {};

self.getAll = async function (req, res) {
    try {
        let data = await category.findAll({ attributes: [['id', 'categoryId'], 'name', 'protected'] });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.get = async function (req, res) {
    try {
        let id = req.params.id;
        let data = await category.findByPk(id, {attributes: [['id', 'categoryId'], 'name', 'protected'] });
        if(data)
            return res.status(200).json(data);
        else
            return res.status(404).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.create = async function (req, res) {
    try {
        let data = await category.create({
            name: req.body.name
        });
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.update = async function (req, res) {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await category.update(body, { where: { id: id } });
        if (data[0] === 0)
            return res.status(404).send();
        else 
            return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.delete = async function (req, res) {
    try {
        let id = req.params.id;
        let data = await category.findByPk(id);
        if (!data)
            return res.status(404).send();
        if (data.protected)
            return res.status(400).send();

        data = await category.destroy({ where: { id: id } });
        if (data === 1)
            return res.status(204).send();
        else
            return res.status(404).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = self;