import EuButton from './src/main';

/* istanbul ignore next */
EuButton.install = function(Vue) {
  Vue.component(EuButton.name, EuButton);
};

export default EuButton;
