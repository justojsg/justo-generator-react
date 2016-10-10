//imports
import React from "react";
import {Link} from "react-router";

/**
 * Index view.
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
    return "View:{{scope.folder}}/Index";
  }

  /**
   * After render().
   *
   * @override
   */
  componentDidMount() {
    //document.title = this.props.title;
    //document.querySelector("meta[name=description]").content = this.props.desc;
  }

  /**
   * Return the component render
   *.
   * @override
   */
  render() {
    return (
      <div>
        {this.constructor.displayName}
      </div>
    );
  }
}
