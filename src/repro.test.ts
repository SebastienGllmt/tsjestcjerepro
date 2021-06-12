import { sync } from 'glob';

describe('Not working', () => {
  test.only('General config is working', async () => {
    // tslint:disable-next-line:no-console
    sync('src/**/*.ts').forEach(path => console.log('Path:', path));
  });
});
