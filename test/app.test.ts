import request from 'supertest';
import { app } from '../src/app';

describe('Service default tests', () => {
  it('should return 400 when rout not found', async () => {
    const res = await request(app).get('/xxxx').expect(404);
  });
});
