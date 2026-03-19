import "./fromInput.css"

export default function Model({isVisible , errorMassage=null}){
    if(isVisible){
    return(
            <div id="model">
                <div id="model-content">
                    {/* <h1></h1> */}
                    <h1 style={{color: errorMassage ? "red" : "green"}}>{errorMassage != null ? errorMassage : "The Form Has Been Submitted Successfully"} </h1>
                </div>
            </div>
        );
    }
    
}