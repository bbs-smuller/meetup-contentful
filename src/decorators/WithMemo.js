import React from 'react'
import hoist from 'hoist-non-react-statics'

export default function withMemo() {
  return WrappedComponent => {
    const hoisted = hoist(React.memo(WrappedComponent), WrappedComponent)

    const enhanced = {
      // eslint-disable-next-line react/forbid-foreign-prop-types
      propTypes: WrappedComponent.propTypes,
      defaultProps: WrappedComponent.defaultProps,
    }

    return Object.assign(hoisted, enhanced)
  }
}
