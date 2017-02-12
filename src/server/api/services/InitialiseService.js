/**
 * Initialise service, add data to the database
 */
module.exports = (function() {

    /**
     * Initialise database with seed data
     */
    const initialiseDb = () => {
        return Duck.create({
            price: 1.50
        });
    };

    return {
        initialiseDb
    };

})();