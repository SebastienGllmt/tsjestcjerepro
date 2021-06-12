import glob from 'glob';

describe('Working', () => {
  test.only('General config is working', async () => {
    // tslint:disable-next-line:no-console
    glob.sync('src/**/*.ts').forEach(path => console.log('Path:', path));
  });
});
