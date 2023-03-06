import request from 'supertest';
import { describe, test, expect } from '@jest/globals';
import app from './../src/app';

describe('API tests', () => {
  test('GET /api/users should return a list of users', async () => {
    const response = await request(app).get('/api/auth/profile');
    expect(response.status).toBe(200);
  });
});