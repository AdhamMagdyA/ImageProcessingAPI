import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

// suite of tests
describe('testing the image api', () => {
  // correct image name with dimensions between 1*1 and 1920x1080
  it('should return the image', async () => {
    const response = await request.get(
      '/api/image/?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  // image with no file name
  it('should fail with no filename', async () => {
    const response = await request.get('/api/image/?width=200&height=200');
    expect(response.status).toBe(400);
  });
  // image with no width
  it('should fail with no width', async () => {
    const response = await request.get('/api/image/?filename=fjord&height=200');
    expect(response.status).toBe(400);
  });
  // image with no height
  it('should fail with no height', async () => {
    const response = await request.get('/api/image/?filename=fjord&width=200');
    expect(response.status).toBe(400);
  });
  // image with filename that does not exist
  it('should fail with wrong filename provided', async () => {
    const response = await request.get(
      '/api/image/?filename=nonexistent&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });
  // image with dimensions out of range
  it('should fail with dimensions out of range', async () => {
    const response = await request.get(
      '/api/image/?filename=fjord&width=2000&height=2000'
    );
    expect(response.status).toBe(400);
  });
  // image with dimensions less than 1
  it('should fail with dimensions less than 1', async () => {
    const response = await request.get(
      '/api/image/?filename=fjord&width=0&height=0'
    );
    expect(response.status).toBe(400);
  });
});
