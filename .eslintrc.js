const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    jquery: true,
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      // 允许以js文件 默认react相关只支持jsx
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0, // div li 也可以绑定onClick
    'jsx-a11y/click-events-have-key-events': 0, // onClick 不需要onKeyUp，onKeyDown，onKeyPress以支持盲人设备
    'import/prefer-default-export': 0, // 不需要默认导出
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      // Link 标签
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'react/prop-types': [
      // 忽略高阶组件中连接的props
      2,
      {
        ignore: ['styles', 'changeThemeReq'],
      },
    ],
    'global-require': [0], // 允许require动态导入
    'max-len': [
      2,
      {
        // 强制行的最大长度
        code: 160,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'consistent-return': [0], // 递归 和 throw情况下 不需要函数一定有返回值
    'array-callback-return': 0, // 递归不要求必须返回
    'no-param-reassign': [0], // 函数参数再赋值
    'valid-jsdoc': 2, // 强制使用有效的 JSDoc 注释
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false, // 不允许短路逻辑
        allowTernary: true, // 允许三元表达式
        allowTaggedTemplates: false, // 不允许标记的模板文字
      },
    ],
    'no-debugger': isProd ? 2 : 0,
    'no-console': isProd ? 2 : 0,
  },
};
