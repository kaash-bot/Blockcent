/** User Controller */
// Call business Logic (services) 

const conn = require('../../../gateway');

exports.view = async function(userid) {
    return await conn.readAssetByID(userid);
}

exports.viewAll = async function() {
    return await conn.getAllAssets();
}

exports.create = async function(obj) {
    return await conn.createAsset(obj);
}

exports.transfer = async function(from, to, points){
    return await conn.transferAssetAsync(from, to, points);
}