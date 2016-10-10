//imports
import React from "react";
{{#if scope.reactRouter}}
import {Link} from "react-router";
{{/if}}

/**
 * App view.
 */
export default class extends React.Component {
  /**
   * Constructor.
   *
   * @param props:object  The element-passed properties.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Display name.
   *
   * @type string
   */
  static get displayName() {
    return "View:App";
  }

  /**
   * @override
   */
  componentDidMount() {
    
  }

  /**
   * @override
   */
  render() {
    return (
      <div>
        Hello world!
        {{#if scope.reactRouter}}
        {this.props.children}
        {{/if}}
      </div>
    );
  }
}
