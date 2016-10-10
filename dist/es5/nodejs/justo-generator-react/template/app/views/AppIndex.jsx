//imports
import React from "react";
import {Link} from "react-router";

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
    return "View:AppIndex";
  }

  /**
   * @override
   */
  componentDidMount() {
    //document.title = this.props.title;
    //document.querySelector("meta[name=description]").content = this.props.desc;
  }

  /**
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
