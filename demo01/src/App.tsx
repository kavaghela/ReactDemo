import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Utilities from './helpers/utilities';
import Header from './components/Header';
export default class App extends React.Component {

  private myHeaderComponent: Header | null = null;
  async componentDidMount() {

    // this.myAsyncFunction(
    //   (myResponse: number) => {
    //     console.log(myResponse);
    //   }
    // )

    // this.betterAsync([]).then(
    //   (myResonse: number | string) => {
    //     console.log(myResonse);
    //   }
    // ).catch(
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    var myResult = await this.betterAsync([]);
    console.log("After Better Function");
    console.log(this.myHeaderComponent?.test);
    this.myHeaderComponent?.pubFun();
  }

  private betterAsync(mytest: string[]): Promise<string | number> {
    console.log("Entring in better function");
    return new Promise<string | number>(
      (resolve, reject) => {
        try {
          console.log("Calling API");
          setTimeout(() => {
            try {
              console.log("Reponse received");
              console.log(mytest[2]);
              resolve(12);
            }
            catch
            {
              reject("Something went wrong");
            }
          }, 3000);

          console.log("AFTER SET TIMEOUT")
        }
        catch
        {
          reject("Something went wrong");
        }
      }
    );
  }

  private parentFun(message: string): void {
    console.log(message);
  }
  private myAsyncFunction(callBack: any) {
    console.log("API CALL STARTED")
    setTimeout(() => {
      console.log("API RESPONSE GET")
      callBack(12);
    }, 3000);
  }
  render() {
    return <div>
      <Header items={['Item1','Item2']} ref={(c) => { this.myHeaderComponent = c; }} header='my header' someFun={this.parentFun}> </Header>
     
      <div>
        {
          1 == 1 ? this.getElements() : <div>false</div>
        }
      Hello World
      </div>
    </div>;
  }
  public getHeaderComponent() {
    return React.createElement(Header, {
      header: "My Header1",
      someFun: this.parentFun,
      items:['Item1','Item2']
    });
  }
  public getElements(): React.ReactElement {
    let myElement = React.createElement(
      "div",
      {
        style: { color: 'red' }
      },
      'Element created using React.createElement'
    );
    return myElement;
  }
}