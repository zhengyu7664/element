import { createTest, destroyVM } from '../util';
import EuButton from 'packages/eu-button';

describe('EuButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(EuButton, true);
    expect(vm.$el).to.exist;
  });
});

