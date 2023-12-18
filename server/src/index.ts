import app from './app';
import sequelize from './config/db/sequelizeConfig';

const PORT = process.env.PORT || 3000 || 3001;

(async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
        await sequelize.authenticate();
        console.log('Database connected!');
    } catch (error) {
        console.error('Unable to start the app properly and to connect to the database:', error);
    }
})();
