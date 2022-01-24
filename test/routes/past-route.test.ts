import moxios from 'moxios';
import request from 'supertest';
import { app } from '../../src/app';

describe('Past launches route', () => {
  it('should return past launches with status 200', async () => {
    moxios.stubRequest(/api.spacexdata.com\/v4\/launches\/next/, {
      status: 200,
      response: [
        {
          id: '61e048bbbe8d8b66799018d0',
          date_local: '2022-01-18T19:04:00-05:00',
          details: null,
          flight_number: 146,
          name: 'Starlink 4-6 (v1.5)',
        },
      ],
    });

    const response = await request(app).get('/next').expect(200);
    expect(response).toBeTruthy();
    expect(response.body).toBeTruthy();
  });
});
