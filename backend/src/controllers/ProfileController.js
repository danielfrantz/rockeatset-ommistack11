const connection = require('../database/connection');
const desableCors = require('../utils/desableCors');

module.exports = {    
    async index(request, response) {

       desableCors(response);

        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}