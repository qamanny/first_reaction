'use Strict';

const { default: Film } = require("./Film");

const MSearchResults = ({films}) => {
    return(
        <div className="container">
            <div className="row">
                {films.map((film, i) => (
                    <div className="col-md-3" key={1}>
                        <Film key={i} {...film}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MSearchResults;
