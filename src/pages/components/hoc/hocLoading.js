import React from 'react';

export default function WithHocLoading(Component) {
  return class extends Component {
    render() {
      return (
        <div>
          <h2>Debugger Component Logging...</h2>
          <p>state:</p>
          <pre>{JSON.stringify(this.state, null, 4)}</pre>
          <p>props:</p>
          <pre>{JSON.stringify(this.props, null, 4)}</pre>
          {super.render()}
        </div>
      );
    }
  };
}
