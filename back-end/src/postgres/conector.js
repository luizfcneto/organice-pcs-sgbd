import Sequelize from 'sequelize';

const Sequela = new Sequelize({
    dialect: "postgres",
    user: "postgres",
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: "admin",
    port: process.env.PGPORT,
});

export default Sequela;