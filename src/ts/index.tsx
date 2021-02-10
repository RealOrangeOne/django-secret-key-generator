import { h, render } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButton } from "react-awesome-button";

interface State {
  value: string | null;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  onGenerate = () => {
    this.setState({
      value: "42"
    });
  };

  render() {
    return (
      <div className="app-wrapper">
        <input placeholder="Click generate" disabled value={this.state.value} />
        <div>
          <AwesomeButton
            ripple
            type="primary"
            size="large"
            onPress={this.onGenerate}
          >
            Generate key
          </AwesomeButton>
          <AwesomeButton
            ripple
            type="secondary"
            size="large"
            disabled={!this.state.value}
          >
            Copy to clipboard
          </AwesomeButton>
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"));
});
