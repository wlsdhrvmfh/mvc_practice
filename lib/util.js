exports.replaceKey = function (obj, targetKey, newKey) {
    obj[newKey] = obj[targetKey];
    delete obj[targetKey];
    return obj;
};