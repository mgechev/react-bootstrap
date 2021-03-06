define(
  ["./ReactPropTransferer","./keyOf","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    "use strict";

    var ReactPropTransferer = __dependency1__["default"];

    var keyOf = __dependency2__["default"];

    var CHILDREN_PROP = keyOf({children: null});

    /**
     * Sometimes you want to change the props of a child passed to you. Usually
     * this is to add a CSS class.
     *
     * @param {object} child child component you'd like to clone
     * @param {object} props props you'd like to modify. They will be merged
     * as if you used `transferPropsTo()`.
     * @return {object} a clone of child with props merged in.
     */
    function cloneWithProps (child, props) {
      var newProps = ReactPropTransferer.mergeProps(props, child.props);

      // Use `child.props.children` if it is provided.
      if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
          child.props.hasOwnProperty(CHILDREN_PROP)) {
        newProps.children = child.props.children;
      }

      return child.constructor.ConvenienceConstructor(newProps);
    }

    __exports__["default"] = cloneWithProps;
  });