const validJSON = (data) => {
    let stringifyData = JSON.stringify(data);
    try {
        JSON.parse(stringifyData);
        return true;
    }
    catch (error) {
        return error;
    }
}

module.exports = validJSON;

