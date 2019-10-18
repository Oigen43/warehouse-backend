'use strict';

const routeUtils = require('@utils/routeUtils');
const goodsService = require('@services/goodsService');
const statusCode = require('@const/statusCode');

function get(req) {
    const { TTNId } = req.query;
    return goodsService.get(TTNId);
}

module.exports = {
    get: routeUtils.handleResponse(get, statusCode.OK, statusCode.NOT_FOUND)
};
