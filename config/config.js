module.exports = config = {
    "dev": {
        "database": process.env.STAGEWOOD_CODING_DB,
        "username": process.env.STAGEWOOD_CODING_USERNAME,
        "password": process.env.STAGEWOOD_CODING_PASSWORD,
        "host": process.env.STAGEWOOD_CODING_HOST,
        "dialect": 'postgres'
    }
}