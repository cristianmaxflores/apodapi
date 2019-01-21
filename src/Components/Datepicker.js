import React from 'react'

const ApodDatepicker = ({ date, onChange, onSubmit }) =>
    <div className="date-picker">
        <form onSubmit={onSubmit}>
            <input name="currentDate" type="date" value={date} onChange={onChange} />
            <br/>
            <input className="btn" type="submit" value="Get APOD" />
        </form>
    </div>
export default ApodDatepicker