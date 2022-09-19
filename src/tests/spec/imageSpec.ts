import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

// suite of tests
describe('testing the image api', () => {
  // test case
  it('should return 200', async () => {
    const response = await request.get('/api/image/?filename=fjord');
    expect(response.status).toBe(200);
  });
  // test case
  it('should return 404',async () =>{
    const response = await request.get('/api/image/');
    expect(response.status).toBe(404);
  });
});
