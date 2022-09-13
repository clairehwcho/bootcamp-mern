import { useParams } from 'react-router';

const Param = (props) => {
    const { param, paramTextColor, paramBgColor } = useParams();

    // Display the text only
    if (param && !paramTextColor && !paramBgColor) {
        if (!isNaN(param)) {
            return <h1> The number is: {param}</h1>
        }
        else {
            return <h1> The word is: {param}</h1>
        }
    }

    // Display the text and change its color
    else if (param && paramTextColor && !paramBgColor) {
        if (!isNaN(param)) {
            return <h1 style={{ color: paramTextColor }}> The number is: {param}</h1>
        }
        else {
            return <h1 style={{ color: paramTextColor }}> The word is: {param}</h1>
        }
    }

    // Display the text and change its color & background color
    else if (param && paramTextColor && paramBgColor) {
        if (!isNaN(param)) {
            return <h1 style={{ color: paramTextColor, backgroundColor: paramBgColor }}> The number is: {param}</h1>
        }
        else {
            return <h1 style={{ color: paramTextColor, backgroundColor: paramBgColor }}> The word is: {param}</h1>
        }
    }
}

export default Param;