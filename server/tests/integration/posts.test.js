const request = require('supertest');
const app = require('../../src/app');

describe('Posts Integration Tests', () => {
  test('health check endpoint should return OK', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);

    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('OK');
  });

  test('should return all posts', async () => {
    const response = await request(app)
      .get('/api/posts')
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });

  test('should return all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);

    expect(response.body).toHaveProperty('message');
  });
});
