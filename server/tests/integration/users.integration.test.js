const request = require('supertest');
const app = require('../../src/app');

describe('Users API Integration Tests', () => {
  test('GET /api/users returns users endpoint', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });

  test('GET /api/posts returns posts endpoint', async () => {
    const response = await request(app)
      .get('/api/posts')
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });

  test('GET /api/health returns server status', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);

    expect(response.body.status).toBe('OK');
  });
});
