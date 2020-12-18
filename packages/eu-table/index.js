/*
 * @Author: your name
 * @Date: 2020-12-16 16:20:52
 * @LastEditTime: 2020-12-18 11:06:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\packages\eu-table\index.js
 */
import EuTable from './src/table';

/* istanbul ignore next */
EuTable.install = function(Vue) {
  Vue.component(EuTable.name, EuTable);
};

export default EuTable;
