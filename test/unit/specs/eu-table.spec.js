import { createTest, destroyVM } from '../util';
import EuTable from 'packages/eu-table';

describe('EuTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(EuTable, true);
    expect(vm.$el).to.exist;
  });
});

