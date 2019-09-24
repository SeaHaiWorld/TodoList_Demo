import React, {Component} from "react";
import "./App.css";
import axios from "axios"

/*import ImgItem from "./components/ImgItem";*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                img: [{
                    id: '',
                    url: ''
                }]
            },
        };
    }

    getDate() {
        axios
            .get("./img.json")
            .then(res => {
                this.setState({data: res.data});
            });
    }

    componentDidMount() {
        this.getDate();
        console.log(this.state.data)
    }

    handleClick = e => {
        if(e.target.className==="prev btn"){

        }

    }

    render() {
        return (
            <div>
                <div className="list">
                    <ul>
                        {this.state.data.img.map((item, key) => {
                            return <div key={key} className={item.id}><img src={item.url} alt="实例"></img></div>
                        })}
                    </ul>
                </div>
                <button href="" className="prev btn">&#60;</button>
                <button href="" className="next btn">></button>
                <div className="buttons">
                    <button href=""><span className="blue"></span></button>
                    <button href=""><span></span></button>
                    <button href=""><span></span></button>
                    <button href=""><span></span></button>
                    <button href=""><span></span></button>
                    <button href=""><span></span></button>
                    <button href=""><span></span></button>
                </div>
            </div>
        );
    }
}

export default App;
