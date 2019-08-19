import React from 'react';
// import { Base64 } from 'js-base64';

// static source
import logo from '../assets/logo.svg';

// components
// hoc
// import Responsibility from './components/responsibility';
// import { WithList, WithShoppingCart } from './components/hoc/shopping';
// import HocForm from './components/hoc/hocForm';
// import HocSimple from './components/hoc/hocSimple';
// import HocLoading from './components/hoc/hocLoading';
// import HocTree from './components/hoc/hocTree';

// render props
// import ProviderGender from './components/renderProps/providerGender';
// import List from './demo/shoppingPropsDemo';

// context
// import ThemeProvider from './components/context/themeProvider';
// import Consumer from './demo/consumer';

// tabs
// import Tabs from './components/tabs/tabs';
// import TabPane from './components/tabs/tabPane';

// oop
// import { Demo1, Demo2 } from './demo/demo';

// utils
import { print } from '../utils/sign';

// style
import './app.css';

class App extends React.Component {
  state = {};
  // state = {
  //   name: '商品名称列表',
  // };
  //
  // onToggleList = () => {
  //   this.setState(state => ({
  //     ...state,
  //     name: state.name === '商品名称列表' ? '购物车列表' : '商品名称列表',
  //   }));
  // };

  // renderList = (props) => {
  //   const {
  //     state: { name },
  //   } = this;
  //   return (
  //     <List add={props.add} name={name} />
  //   );
  // };

  componentDidMount() {
    print();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { /* <ThemeProvider className="App" value={{ mainColor: 'blue', textColor: 'red' }}> */ }
          {/* <WithList /> */}
          {/* <WithShoppingCart /> */}
          {/* <input
            type="text"
            {...setFormItem('username')}
            placeholder="用户名"
          />
          <input
            type="password"
            placeholder="密码"
            {...setFormItem('password')}
          />
          <div>
            表单数据：
            {JSON.stringify(getForm())}
          </div> */}
          {/* <ProviderGender>
            {this.renderList}
          </ProviderGender>
          <button
            type="button"
            onClick={this.onToggleList}
          >
            点我
          </button> */}
          {/* <Consumer /> */}
          {/* <Tabs>
            <TabPane tab="One">
              <div>内容1</div>
            </TabPane>
            <TabPane tab="Two">
              <div>内容2</div>
            </TabPane>
            <TabPane tab="Three">
              <div>内容3</div>
            </TabPane>
          </Tabs> */}
          {/* <Demo1 />
          <Demo2 /> */}
        </header>
      </div>
    );
  }
}

export default App;
// export default HocTree(App);
// export default HocForm(App);
