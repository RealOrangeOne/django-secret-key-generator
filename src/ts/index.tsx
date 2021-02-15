import * as clipboard from "clipboard-polyfill/text";
import { h, render } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButton } from "react-awesome-button";

import { getSecretKey } from "./random";

interface State {
  value: string | null;
  copiedToClipboard: boolean;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = {
      value: null,
      copiedToClipboard: false
    };
  }

  onGenerate = () => {
    this.setState({
      value: getSecretKey(),
      copiedToClipboard: false
    });
  };

  componentDidMount() {
    this.onGenerate();
  }

  onCopyToClipboard = () => {
    clipboard.writeText(this.state.value).then(() => {
      this.setState({
        copiedToClipboard: true
      });
    });
  };

  render() {
    const displayingValue =
      this.state.value === null ? "Click generate" : `"${this.state.value}"`;
    return (
      <div className="app-wrapper">
        <h2 className="key">{displayingValue}</h2>
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
            onPress={this.onCopyToClipboard}
          >
            {this.state.copiedToClipboard ? "Copied!" : "Copy to clipboard"}
          </AwesomeButton>
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"));
});
