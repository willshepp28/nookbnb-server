const request = require('supertest');
const application = require('../app.js');


describe('App Initialization', () => {
    it('should return a 200 for the main route', async () => {
        const respones = await request(application)
            .get('/')
            .expect(200);
    });
});