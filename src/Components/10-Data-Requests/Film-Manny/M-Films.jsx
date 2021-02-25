'use Strict';
import {Card,CardImg,CardBody,CardTtitle,CardSubTitle} from 'reactstrap'

const MFilm = (props) => {
    return (
        <>
            <Card>
                <CardImg src={props.Poster} />
                <CardBody>
                    <CardTitle>{props.Title}</CardTitle>
                    <CardSubTitle>{props.Year}</CardSubTitle>
                    <button className="btn btn-outline-info" onClick={() => props.getDetails(props.imdbID)}>Details</button>
                </CardBody>
            </Card>
        </>
    )
}

export default MFilm;