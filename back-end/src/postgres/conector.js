import Sequelize from 'sequelize';

const options = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
}

const Sequela = new Sequelize(options);

export default { Sequela };