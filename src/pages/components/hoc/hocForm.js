import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { getDisplayName } from './utils';

export default function WithForm(Component) {
  class Enhance extends React.Component {
    static displayName = `WithForm(${getDisplayName(Component)})`;

    state = {
      form: {},
    };

    onChange = key => (e) => {
      const { form } = this.state;
      form[key] = e.target.value;
      this.setState({
        form,
      });
    };

    handleSubmit = () => this.state.form;

    getField = fieldName => ({
      onChange: this.onChange(fieldName),
    });

    render() {
      const newProps = {
        ...this.props,
        getForm: this.handleSubmit,
        setFormItem: this.getField,
      };

      return (<Component {...newProps} />);
    }
  }
  // 自动拷贝所有非 React 的静态方法
  hoistNonReactStatic(Enhance, Component);
  return Enhance;
}
