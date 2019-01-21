import React, { Component } from 'react';
import axios from 'axios';
import '../App.scss';
import img_failure from '../sadface.jpg'
import img_request from '../logo.svg'
  
import Datepicker from './Datepicker'
import Loader from './Loader'
import Viewer from './ApodViewer'
import { API_URL, requestTxt, failureTxt } from '../App.constants'



class ApodApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentDate: new Date().toLocaleDateString().split("/").reverse().map(x => x.length < 2 ? "0" + x : x).join("-"),
      loading: false,
      failure: false
    }
    this.fetchFromApi = this.fetchFromApi.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  fetchFromApi(e) {
    e.preventDefault()
    this.updateApod()
  }

  updateApod() {
    this.setState({ data: null, loading: true, failure: false })
    axios.get(API_URL + "&date=" + this.state.currentDate)
      .then(res => {
        const data = res.data;
        this.setState({ data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, failure: true })
        return console.log(error)
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    if (!this.state.data) {
      this.updateApod()
    }
  }

  render() {
    const { data, loading, currentDate, failure } = this.state
    console.log(this.state)
    return (
      <div className="apod-container">
        <Datepicker date={currentDate} onChange={this.handleChange} onSubmit={this.fetchFromApi} />
        {loading && <Loader textForLoader={requestTxt} loading={true} img={img_request}/>}
        {failure && <Loader textForLoader={failureTxt} loading={false} img={img_failure}/>}
        {data && <Viewer data={data} />}
       </div>
    );
  }
}


export default ApodApp
