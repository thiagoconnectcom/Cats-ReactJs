import React , {Component} from 'react';
import './style.scss';

//service
import api from "../../services/api";

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            cats:''
        }
    }

    async componentDidMount(){
      const response = await api.get('/meow');
      this.setState({cats: response.data.file})
    }

    render(){
        const {cats} = this.state;
        return(
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                      <img className="img" src={cats}/>
                    </div>
                </div>
            </div>
        )
    }
}