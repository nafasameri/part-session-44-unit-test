const db = require('./db');

// const axios = require('axios');
// axisos.default.withCredemtials = true;
const mocha = require('mocha');
const assert = require('assert');

describe('DB Tests', () => {
    it('test doSum', (done) => {
        assert.equal(db.doSum(1, 1), 2, 'passed');
        done();
    });

    it('test fallbackSum', async () => {
        const result = await db.fallbackSum(1, 1);
        assert.equal(result, 2, 'passed');
    });

    it('test askFromOthers', (done) => {
        assert.equal(db.askFromOthers(1, 1), 2, 'passed');
        done();
    });
});