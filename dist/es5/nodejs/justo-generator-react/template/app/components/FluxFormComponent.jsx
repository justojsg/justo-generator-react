//imports
import React from "react";
{{#if (ne scope.store "<none>")}}
import store from "../stores/{{scope.store}}";
{{/if}}
{{#if (ne scope.actionModule "<none>")}}
import {{scope.actionModule}} from "../actions/{{scope.actionModule}}";
{{/if}}

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
   * Invoked when component did mount.
   *
   * @override
   */
  componentDidMount() {
    // store.findOne({id: this.props.id}, (err, doc) => {
    //   if (err) alert(err);
    //   else this.setState(doc);
    // });
  }

  /**
   * Should it be rendered when update render?
   *
   * @override
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  /**
   * Return the component render.
   *
   * @override
   */
  render() {
    const state = this.state;

    return (
      <form onSubmit={(evt) => this.handleSubmit(evt)}{{#if scope.handleChange}} onChange={(evt) => this.handleChange(evt)}{{/if}}{{#if scope.autoComplete}} autoComplete="on"{{/if}}{{#if scope.noValidate}} noValidate{{/if}}>

      </form>
    );
  }
}
