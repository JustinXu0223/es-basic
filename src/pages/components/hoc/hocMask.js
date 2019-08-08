import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { getDisplayName } from './utils';

export default function WithMask(Component) {
  class Enhance extends React.Component {
    static displayName = `WithMask(${getDisplayName(Component)})`;

    render() {
      return (
        <div>
          <Component {...this.props} />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: -1,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          />
        </div>
      );
    }
  }
  // 自动拷贝所有非 React 的静态方法
  hoistNonReactStatic(Enhance, Component);
  return Enhance;
}
