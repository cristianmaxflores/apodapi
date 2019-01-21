import React from 'react'

const ApodViewer = ({ data }) =>
    <div className="text">
        {<h1>{data.title}</h1>}

        {data.media_type === 'image' &&
            <img src={data.url} alt={data.media_type} />
        }

        {data.media_type === 'video' &&
            <iframe title={data.title} src={data.url} id="apod_vid_id" type="text/html" width="640" height="385" frameBorder="0"></iframe>
        }
        <h5>Credits: {data.copyright ? data.copyright : "Public Domain"}</h5>
        <p>{data.explanation}</p>
    </div>

export default ApodViewer