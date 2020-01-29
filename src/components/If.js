import React from 'react';

function If(props) {
    const {isTrue, isFalse} = props;

    if (isTrue !== undefined) {
        return isTrue ? <>{props.children}</> : '';
    } else if (isFalse !== undefined) {
        return !isFalse ? <>{props.children}</> : '';
    } else {
        return ''
    }
}

export default If;
