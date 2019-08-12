import React from 'react';
import { Base64 } from 'js-base64';

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
import { Demo1, Demo2 } from './demo/demo';

// style
import './app.css';

const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const bList = '0123456789'.split('');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getSuffix(num = 2) {
  // return Array.form(Array(num)).map((v, i) => {
  //   if (i % 2 === 0) return aList[getRandomInt(51)];
  //   return bList[getRandomInt(10)];
  // });
  const list = [];
  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      list.push(aList[getRandomInt(51)]);
    } else {
      list.push(bList[getRandomInt(10)]);
    }
  }
  return list.join('');
}

const list = [0, 1, 3, 2, 1];

function encode(data, arr = list) {
  try {
    let res = data;
    arr.forEach((item) => {
      if (!item) {
        res = Base64.encode(JSON.stringify(data));
      } else {
        res = Base64.encode(`${getSuffix(item)}${res}`);
      }
      console.log(res);
    });
    return res;
  } catch (e) {
    return '';
  }
}

function decode(data, arr = list.reverse()) {
  try {
    let res = data;
    arr.forEach((item) => {
      if (!item) {
        res = JSON.parse(Base64.decode(res));
      } else {
        res = Base64.decode(res).slice(item);
      }
      console.log(res);
    });
    return res || {};
  } catch (e) {
    return {};
  }
}

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
    const data = encode({ name: '12312adc1', password: '321212' });
    console.log('@encode-result:', data);
    const res = decode(data);
    console.log('@decode-result:', res);
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
          <Demo1 />
          <Demo2 />
        </header>
      </div>
    );
  }
}

export default App;
// export default HocTree(App);
// export default HocForm(App);
