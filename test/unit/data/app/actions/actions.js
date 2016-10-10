//imports
import dispatcher from "../dispatcher/AppDispatcher";

//actions types and action creators
export default const Actions = {
  ONE_ACTION: "one-action",
  oneAction(data) {
    dispatcher.dispacth({
      type: Actions.ONE_ACTION,
      data: data
    });
  }
};
