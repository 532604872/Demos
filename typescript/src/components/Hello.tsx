/**
 * @Description:
 * @Author: zero
 * @Date: 2019-11-26 15:33:12
 * @LastEditors: zero
 * @LastEditTime: 2019-11-26 15:33:12 
*/

import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    let name = 'zero'

    return <h1>{name} Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}






















