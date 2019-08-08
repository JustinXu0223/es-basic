/** 模式所解决的问题
 *  同样的逻辑我们总不能重复写多次。
 *  高阶组件起到了抽离共通逻辑的作用。
 *  同时高阶组件的嵌套使用使得代码复用更加灵活了。
 *
 *  注意事項
 *  1. 包装显示名称以便轻松调试
 *  2. 不要在 render 方法中使用 HOC
 *  3. 务必复制静态方法
 *  4. Refs 不会被传递
* */
import React from 'react';
import PropTypes from 'prop-types';

import JudgeWoman from '../components/hoc/hocGender';

const List = ({ add }) => (
  <div>
    <span>女士列表页: </span>
    <span>{add}</span>
  </div>
);

List.defaultProps = {
  add: '',
};

List.propTypes = {
  add: PropTypes.string,
};

export const WithList = JudgeWoman(List);

const ShoppingCart = ({ add }) => (
  <div>
    <span>女士购物页: </span>
    <span>{add}</span>
  </div>
);

ShoppingCart.defaultProps = {
  add: '',
};

ShoppingCart.propTypes = {
  add: PropTypes.string,
};

export const WithShoppingCart = JudgeWoman(ShoppingCart);
