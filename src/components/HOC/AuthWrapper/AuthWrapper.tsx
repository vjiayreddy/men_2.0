import React, { useState } from "react";

interface VisibilityProps {
  isVisible?: boolean;
}
export function authWrapper<P>(WrappedComponent: React.ComponentType<P>) {
  const VisibityControlled = (props: P & VisibilityProps) => {
    if (props.isVisible === false) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  return VisibityControlled;
}
