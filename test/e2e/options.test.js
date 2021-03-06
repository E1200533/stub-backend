'use strict';

const app = require('../../lib/app');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('@E2E- OPTIONS - stub backend project', () => {
  it('returns a 204 status', (done) => {
    request(app)
        .options('/story/nathan')
        .end((err, res) => {
          expect(err).to.not.exist;
          expect(res.status).to.equal(204);
          expect(res.body).to.be.empty;
          done();
        });
  });
});
