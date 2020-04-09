import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import { throws } from 'assert';
export default class Header extends React.Component<IHeaderProps, {}> {

    public test:string = 'something';    
    constructor(props: IHeaderProps) {
        super(props);
        console.log(this.props.items);

    }

    render() {
        this.props.someFun("Called from Header Component");

        
        return <div>
            {this.props.header}
            {
                this.props.items.map(
                    (item:string) => {
                        return <div>
                            {
                                item
                            }
                        </div>;
                    }
                )
            }
            </div>;
    }

    public pubFun() {

    }

}