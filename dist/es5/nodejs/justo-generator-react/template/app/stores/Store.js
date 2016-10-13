//imports
{{#if (eq scope.dataAccess "http")}}
import http from "http";
{{else if (eq scope.dataAccess "request")}}
import request from "request";
{{/if}}
import {Store} from "flux/utils";
import dispatcher from "../dispatcher/AppDispatcher";
import config from "../conf/config";
{{#if (ne scope.actionModule "<none>")}}
import {{scope.actionModule}} from "../actions/{{scope.actionModule}}";
{{/if}}

/**
 * {{scope.desc}}
 */
export default new class {{scope.name}} extends Store {
  /**
   * Constructor.
   *
   * @param dispatcher:dispatcher The dispatcher where to register.
   */
  constructor(dispatcher) {
    super(dispatcher);
    Object.defineProperty(this, "changed", {value: false, writable: true});
  }

  /**
  * Check whether the last write operation modified data in the data source.
  *
  * @override
  * @return boolean
  */
  hasChanged() {
    return this.changed;
  }

  /**
   * Handle the actions.
   *
   * @override
   * @param action:object The action: type (string) and data (any).
   */
  __onDispatch(action) {
    // const type = action.type;
    // const data = action.data;
    //
    // switch(type) {
    //   //sync example:
    //   //case Action.THE_ACTION:
    //   //  this[op](data);
    //   //  if (this.hasChanged()) this.__emitChange();
    //   //break;
    //
    //   //async example:
    //   //case Action.THE_ACTION:
    //   //  this[op](data, (err) => {
    //   //    if (err) alert(err);
    //   //    else if (this.hasChanged()) this.__emitChange();
    //   //  });
    //   //break;
    // }
  }
}(dispatcher);
