import React from 'react'
import { Animated } from "react-animated-css";

function AnimatedComponent() {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div>
                hello world ;)
            </div>
        </Animated>
    )
}

export default AnimatedComponent;
