import React from 'react'
import "./Formh.css"

export default function Formh() {
  return (
    <div className="formh">
      <div className="Formh-Header">
        <h1>Post Your Reviews</h1>
      </div>
        <form>
            <div className="formhcontainer">
            <div className="input">
            <input type="text" placeholder="Name*" name="Name"/>
            <input type="text" placeholder="Email*" name="Email"/>

            </div>
            <div className="textarea">
            <textarea type="text" cols='80' rows='10' placeholder="Your Comment" ></textarea>

            </div>
            {/* <div className="btnsh"> */}
            <button type="submit" className="submit">Send</button>
            </div>
            {/* </div> */}
        </form>
      
    </div>
  )
}
