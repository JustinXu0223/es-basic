import React from 'react';

export default function WithTree(Component) {
  return class extends Component {
    render() {
      const tree = super.render();
      const newProps = {};
      if (tree && tree.type === 'div') {
        newProps.className = 'App add-view';
      }
      const props = {
        ...tree.props,
        ...newProps,
      };
      const newTree = React.cloneElement(tree, props, tree.props.children);
      return newTree;
    }
  };
}
