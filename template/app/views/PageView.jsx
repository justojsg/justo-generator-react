//imports
import React from "react";
import {Link} from "react-router";

/**
 * {{scope.desc}}
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

    //initial state
    this.state = {

    };
    {{/if}}
  }

  /**
   * Display name.
   *
   * @type string
   */
  static get displayName() {
    return "View:{{scope.folder}}/{{scope.name}}";
  }
  {{#if (eq scope.type "Mutable")}}

  /**
   * Should it be rendered when update render?
   *
   * @override
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }
  {{/if}}

  /**
   * Invoked after render().
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
