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

    //initial state
    this.state = {

    };
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

  /**
   * Handle the Submit event.
   *
   * @private
   * @param evt:SyntheticEvent  The event object.
   */
  handleSubmit(evt) {
    {{#if scope.preventDefaultOnSubmit}}
    evt.preventDefault();
    {{/if}}
  }

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

  /**
   * Return the component render
   *.
   * @override
   */
  render() {
    return (
      <form onSubmit={(evt) => this.handleSubmit(evt)}{{#if scope.onChange}} onChange={(evt) => this.handleChange(evt)}{{/if}}{{#if scope.autoComplete}} autoComplete="on"{{/if}}{{#if scope.noValidate}} noValidate{{/if}}>

      </form>
    );
  }
}
