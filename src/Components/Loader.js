import React from 'react'

//const Loader = ({textForLoader}) => <p>{textForLoader}</p>
const Loader = ({textForLoader, loading, img}) => <div><p>{textForLoader}</p><img className={loading ? "img_loading" : ""} src ={img} alt="img" /></div>

export default Loader