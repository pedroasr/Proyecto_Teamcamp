import mariadb, { Connection } from 'mariadb';

const REMOVE_TABLE = `DROP TABLE IF EXISTS movies;`;
const CREATE_TABLE_MOVIES = `CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(200),
    image VARCHAR(2000),
    description TEXT,
    gender VARCHAR(20),
    release_year INT,
    rate FLOAT,
    PRIMARY KEY ( id )
    );`;

const INSERT_VALUES = `INSERT INTO movies
    (name, image, description, gender, release_year, rate)
    VALUES 
    ('Ambulance. Plan de huida', 'https://pics.filmaffinity.com/ambulance-409574561-large.jpg', 
    'El veterano Will Sharp, en un acto desesperado por conseguir dinero para cubrir las deudas médicas de su esposa, recurre a la única persona que sabe que no debería, su hermano adoptivo Danny. Danny le ofrece participar en un robo a un banco, el más grande en la historia de la ciudad. Will no puede decir que no. Cuando su intento de escape sale mal, los hermanos secuestran una ambulancia con un policía herido y una paramédica. Ahora deberán huir de un inmenso dispositivo de fuerzas de seguridad desplegado por toda la ciudad, mantener a sus rehenes con vida y de alguna forma tratar de no matarse entre ellos.', 
    'Accion', '2022', '5.7');`;
























export type MariaConfig = {
    host: string;
    port: number;
    root: string;
    user: string;
    password: string;
    database: string;
};
export function buildSQLDatabase({
    host,
    port,
    user,
    password,
    database
}: MariaConfig) {
    let pool: Connection;
    async function runQuery(query: string) {
        if (!pool) throw new Error('Database not initialized');
        return pool.query(query);
    }

    async function init(): Promise<void> {
        pool = await mariadb.createConnection({
            host,
            port,
            password,
            user
        });
        await pool.query(`USE ${database}`);
        await pool.query(REMOVE_TABLE);
        await pool.query(CREATE_TABLE_MOVIES);
        await pool.query(INSERT_VALUES);
    }

    async function close(): Promise<void> {
        if (!pool) return;
        await pool.end();
    }

    return {
        init,
        close,
        runQuery
    };
}

export type SQL_DB = ReturnType<typeof buildSQLDatabase>;
