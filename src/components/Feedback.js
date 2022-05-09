import React from 'react'

const Feedback = ({percentage}) => {
    var img = "/images/youcandobetter.jpg";
    var text = "Try harder...";

    if (percentage >= 0.9) {
        img = "/images/perfect.jpg"
        text = "I bet you're an Asian";

    } else if (percentage >= 0.6) {
        img = "/images/notbad.jpg"
        text = "Keep it up";

    } else if (percentage >= 0.3) {
        img = "/images/atleastyoutried.jpg"
        text = "We advise you to make more Asian friends";
    }

    return (
        <div className='score-section'>
        <img src={img} />
        <p>{text}</p>
        </div>
    )
}

export default Feedback