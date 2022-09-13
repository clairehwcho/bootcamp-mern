const Box = (props) => {
    return(
        <div>
            <div style={{width: '55px', height: '55px', backgroundColor:props.box.color}}></div>
            <button onClick={(e) => {
                props.handleBoxDelete(props.i);
            }}>Delete</button>
        </div>
    );
};

export default Box;