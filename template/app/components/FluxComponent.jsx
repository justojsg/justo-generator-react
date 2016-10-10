//imports
import React from "react";
import store from "../stores/{{scope.store}}";
{{#if (ne scope.actionModule "<none>")}}
import {{scope.actionModule}} from "../actions/{{scope.actionModule}}";
{{/if}}
{{#if scope.handleStoreChange}}

//private members
const handleStoreChange = Symbol();
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
    const props = this.props;

    {{#if scope.handleStoreChange}}
    store.addListener(() => this[handleStoreChange]());
    {{/if}}
    // store.findOne({id: props.id}, (err, doc) => {
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
   * Return the component render
   *.
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
