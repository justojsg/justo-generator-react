//imports
import React from "react";
import store from "../stores/{{scope.store}}";
{{#if (ne scope.actionModule "<none>")}}
import {{scope.actionModule}} from "../actions/{{scope.actionModule}}";
{{/if}}

//private members
{{#if scope.handleChange}}
const handleChange = Symbol();
{{/if}}
{{#if scope.handleStoreChange}}
const handleStoreChange = Symbol();
{{/if}}
const handleSubmit = Symbol();

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
  [handleSubmit](evt) {
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
  [handleChange](evt) {
    const target = evt.target;

    this.setState({
      [evt.target.name]: (target.type == "checkbox" ? target.checked : target.value)
    });
  }
  {{/if}}
  {{#if scope.handleStoreChange}}

  /**
   * Handle the change event fired by the Flux store.
   *
   * @private
   */
  [handleStoreChange]() {
    //async example:
    //store.find({...}, (err, doc) => {
    //  if (err) console.log(err);
    //  else this.setState(doc);
    //});

    //sync example:
    //var doc = store.find({...});
    //this.setState(doc);
  }
  {{/if}}

  /**
   * Invoked when component did mount.
   *
   * @override
   */
  componentDidMount() {
    {{#if scope.handleStoreChange}}
    store.addListener(() => this[handleStoreChange]());
    {{/if}}

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
    var elm;

    //(1) build element
    if (!this.state.someProperty) {
      elm = (
        <div>
          <span className="fa fa-spinner fa-pulse fa-3x fa-fw"></span>Loading...
        </div>
      );
    } else {
      elm =
        <form onSubmit={(evt) => this[handleSubmit](evt)}{{#if scope.handleChange}} onChange={(evt) => this[handleChange](evt)}{{/if}}{{#if scope.autoComplete}} autoComplete="on"{{/if}}{{#if scope.noValidate}} noValidate{{/if}}>

        </form>
      );
    }

    //(2) return element
    return elm;
  }
}
