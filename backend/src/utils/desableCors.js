module.exports = function desableCors(response) {
    // Desabilitar Access-Control-Allow-Origin no Chrome e Firefox
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
}