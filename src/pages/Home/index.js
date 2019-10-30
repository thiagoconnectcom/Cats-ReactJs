import React , {Component} from 'react';
import './style.scss';

//service
import api from "../../services/api";

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            cats:'',
            catsTwo:'',
            catsThree:''
        }
    }

    async componentDidMount(){
      const response = await api.get('/meow');
      const responseTwo = await api.get('/meow');
      const responseThree = await api.get('/meow');

      this.setState({cats: response.data.file})
      this.setState({catsTwo: responseTwo.data.file})
      this.setState({catsThree: responseThree.data.file})
    }

    render(){
        const {cats, catsTwo, catsThree} = this.state;
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={cats} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">
                                    {cats}
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={catsTwo} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">
                                    {cats}
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={catsThree} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">
                                    {cats}
                                 </p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}