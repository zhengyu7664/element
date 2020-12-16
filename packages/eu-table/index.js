import EuTable from './src/main';

/* istanbul ignore next */
EuTable.install = function(Vue) {
  Vue.component(EuTable.name, EuTable);
};

export default EuTable;
