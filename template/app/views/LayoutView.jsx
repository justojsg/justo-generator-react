//imports
import React from "react";
import {Link} from "react-router";

/**
 * Layout view.
 */
export default class extends React.Component {
  /**
   * Constructor.
   *
   * @param props:object  The element-passed properties.
   */
  constructor(props) {
    super(props);
    {{#if (eq scope.type "Mutable")}}
    this.state = {};
    {{/if}}
  }

  /**
   * Display name.
   *
   * @type string
   */
  static get displayName() {
    return "View:{{scope.folder}}/Layout";
  }

  /**
   * @override
   */
  render() {
    return (
      <div>
        {this.constructor.displayName}<br/>
        {this.props.children}
      </div>
    );
  }
}
