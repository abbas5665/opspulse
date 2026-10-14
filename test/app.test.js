const { test } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

test('GET / returns application information', async (t) => {
  const server = app.listen(0);

  t.after(() => {
    server.close();
  });

  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.application, 'OpsPulse API');
  assert.equal(body.version, '1.1.0');
});

test('GET /health returns a healthy status', async (t) => {
  const server = app.listen(0);

  t.after(() => {
    server.close();
  });

  const address = server.address();
  const response = await fetch(
    `http://127.0.0.1:${address.port}/health`
  );
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, 'healthy');
  assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
});
