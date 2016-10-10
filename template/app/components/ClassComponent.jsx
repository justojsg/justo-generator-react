//imports
import React from "react";

/**
 * {{scope.desc}}
 */
export default class {{scope.name}} extends React.Component {
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
    return "{{scope.displayName}}";
  }
  {{#if scope.propTypes}}

  /**
   * Restrictions for the `props` property.
   *
   * @type object
   */
  static get propTypes() {
    return {

    };
  }
  {{/if}}
  {{#if scope.defaultProps}}

  /**
   * Default values for the `props` property.
   *
   * @type object
   */
  static get defaultProps() {
    return {

    };
  }
  {{/if}}
  {{#if scope.defineContext}}

  /**
   * Define the properties of the context for its descendants.
   *
   * @return object
   */
  getChildContext() {
    return {

    };
  }

  /**
   * Indicate the property types of the context.
   *
   * @type object
   */
  static get childContextTypes() {
    return {

    };
  }
  {{/if}}
  {{#if scope.useContext}}

  /**
   * Properties of the context to use.
   *
   * @type object
   */
  static get contextTypes() {
    return {

    };
  }
  {{/if}}
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
  {{#if scope.handleChange}}

  /**
   * Handle the Change event of the input components.
   *
   * @private
   * @param evt:SyntheticEvent  The event object.
   */
  handleChange(evt) {
    const target = evt.target;

    this.setState({
      [evt.target.name]: (target.type == "checkbox" ? target.checked : target.value)
    });
  }
  {{/if}}

  /**
   * Return the component render
   *
   * @override
   */
  render() {
    return (
      <div>
        Hello Reacter!
        {{#if (eq scope.structType "Composite")}}
        {this.props.children}
        {{/if}}
      </div>
    );
  }
}
