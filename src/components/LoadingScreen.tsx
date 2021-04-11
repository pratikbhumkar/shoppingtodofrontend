import loading from "../assets/loading.gif";
export const LoadingScreen = () => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={loading} alt="Loading..." />
                <h3>Please wait while the todos are loaded.</h3>
            </div>
        </div>
    )
}
