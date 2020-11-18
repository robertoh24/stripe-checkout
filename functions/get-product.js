const products = require("./data/product.json");
exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(products)
    }
}