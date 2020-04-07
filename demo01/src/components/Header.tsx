import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import { throws } from 'assert';
export default class Header extends React.Component<IHeaderProps, {}> {


    constructor(props: IHeaderProps) {
        super(props);

    }

    render() {
        this.props.someFun("Called from Header Component");

        
        return <div>{this.props.header}</div>;
    }

}