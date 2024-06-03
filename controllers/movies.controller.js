const { movie, category, Sequelize } = require('../models');
const Op = Sequelize.Op;

let self = {};

self.getAll = async function (req, res) {
    try {
        const { s } = req.query;
        const filters = {};
        if (s) {
            filters.title = {
                [Op.like]: `%${s}%`
            }
        }

        let data = await movie.findAll({
            where: filters,
            attributes: [['id', 'movieId'], 'title', 'synopsis', 'year', 'poster'],
            include: {
                model: category,
                as: 'categories',
                attributes: [['id', 'categoryId'], 'name','protected'],
                through: { attributes: [] }
            },
            subquery: false
        });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.get = async function (req, res) {
    try {
        let id = req.params.id;
        let data = await movie.findByPk(id, {
            attributes: [['id', 'movieId'], 'title', 'synopsis', 'year', 'poster'],
            include: {
                model: category,
                as: 'categories',
                attributes: [['id', 'categoryId'], 'name','protected'],
                through: { attributes: [] }
            },
        });
        if (data)
            return res.status(200).json(data);
        else 
            return res.status(404).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.create = async function (req, res) {
    try {
        let data = await movie.create({
            title: req.body.title,
            synopsis: req.body.synopsis,
            year: req.body.year,
            poster: req.body.poster
        })
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.update = async function (req, res) {
    try{
        let id = req.params.id;
        let body = req.body;
        let data = await movie.update(body, { where: { id: id } });
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
        let data = await movie.findByPk(id);
        if (!data)
            return res.status(404).send();

        data = await movie.destroy({ where: { id: id } });
        if (data === 1)
            return res.status(204).send();
        else
            return res.status(404).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

self.assigncategory = async function (req, res) {
    try {
        let itemToAssign = await category.findByPk(req.body.categoryId);
        if (!itemToAssign) return res.status(404).send();

        let item = await movie.findByPk(req.params.id);
        if (!item) return res.status(404).send();

        await item.addcategory(itemToAssign);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error); 
    }
}

self.deletecategory = async function (req, res) {
    try {
        let itemToRemove = await category.findByPk(req.params.idcategory);
        if (!itemToRemove) return res.status(404).send();

        let item = await movie.findByPk(req.params.id);
        if (!item) return res.status(404).send();

        await item.removecategory(itemToRemove);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = self;