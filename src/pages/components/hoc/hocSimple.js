export default function WithHocSimple(Component) {
  return class extends Component {
    render() {
      return super.render();
    }
  };
}
