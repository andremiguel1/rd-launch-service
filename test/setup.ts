import moxios from 'moxios';

beforeEach(async () => {
  moxios.install();
});

afterEach(async () => {
  moxios.uninstall();
});

afterAll(async () => {
  jest.resetModules();
});
