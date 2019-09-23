'use strict';

const routeUtils = require('../utils/routeUtils');
const warehouseService = require('../services/warehouseService');
const statusCode = require('../const/statusCode');

function get(req) {
    const { page, perPage, companyId } = req.query;
    return warehouseService.get(page, perPage, companyId);
}

function create(req) {
    const { body: warehouse } = req;
    return warehouseService.create(warehouse);
}

function update(req) {
    const { body: warehouse } = req;
    return warehouseService.update(warehouse);
}

function remove(req) {
    const { body: warehouse } = req;
    return warehouseService.remove(warehouse);
}

module.exports = {
    get: routeUtils.handleResponse(get, statusCode.OK, statusCode.NOT_FOUND),
    create: routeUtils.handleResponse(create, statusCode.CREATED, statusCode.CONFLICT),
    update: routeUtils.handleResponse(update, statusCode.OK, statusCode.NOT_FOUND),
    remove: routeUtils.handleResponse(remove, statusCode.OK, statusCode.NOT_FOUND)
};
