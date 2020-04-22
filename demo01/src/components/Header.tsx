import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import { throws } from 'assert';
import { IHeaderState } from './IHeaderState';
export default class Header extends React.Component<IHeaderProps, IHeaderState> {

    public test: string = 'something';
    private inputElement: HTMLInputElement | null = null;
    constructor(props: IHeaderProps, state: IHeaderState) {
        super(props);

        this.state = {
            items: [...this.props.items]
        }

    }

    componentDidMount() {
    }

    render() {
        this.props.someFun("Called from Header Component");
        return <div>
            {this.props.header}
            {
                this.state.items.map(
                    (item: string) => {
                        return <div>
                            {
                                item
                            }
                        </div>;
                    }
                )
            }

            <input type='text' ref={(c) => this.inputElement = c} />
            <button onClick={this.onButtonClick.bind(this)}>Add Item</button>
        </div>;
    }

    private onButtonClick() {
        this.setState(
            (prevState: IHeaderState): IHeaderState => {

                let newState: IHeaderState = { items: [...prevState.items] };
                if(this.inputElement?.value) {                    
                    newState.items.push(this.inputElement?.value);
                    if(this.inputElement) {
                        this.inputElement.value = '';
                    }
                }                
                return newState;
            }
        );
    }
    public pubFun() {

    }

}