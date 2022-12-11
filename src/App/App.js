import React from 'react';


class App extends React.Component{
    state = {
        count :0
    }

    addCount = (value) =>{
        this.setState({
            count:this.state.count + 1
        })
    }

    minusCount = (value) =>{
        this.setState({
            count:this.state.count - 1
        })
    }

    render(){

        let appStyle = {
            width:'30%',
            margin:'auto',
            boxShadow:'0 0 2px 2px black'
        }

        return(

            <div style={appStyle} className="App">
                <h1>Счетчик: <span>{this.state.count}</span></h1>
                <div>
                    <button onClick={ ()=> this.addCount(1)}>AddCount</button>
                    <button onClick={ ()=> this.minusCount(1)}>MinusCount</button>
                </div>
            </div>

        )
    }
}

export default App;

