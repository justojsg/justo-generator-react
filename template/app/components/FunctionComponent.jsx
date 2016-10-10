//imports
import React from "react";

/**
 * {{scope.desc}}
 */
export default function {{scope.name}}(props) {
  return (
    <div>
      Hello Reacter!
      {{#if (eq scope.structType "Composite")}}
      {props.children}
      {{/if}}
    </div>
  );
}
