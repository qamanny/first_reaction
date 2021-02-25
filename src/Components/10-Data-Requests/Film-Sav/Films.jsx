'use Strict';
import {Card,CardImg,CardBody,CardTtitle,CardSubTitle} from 'reactstrap'

const Film = (props) => {
    return (
        <>
            <Card>
                <CardImg src={props.Poster} />
                <CardBody>
                    <CardTtitle>{props.Title}</CardTtitle>
                    <CardSubTitle>{props.Year}</CardSubTitle>
                    <button className="btn btn-outline-info" onClick={() => props.getDetails(props.imdbID)}>Details</button>
                </CardBody>
            </Card>
        </>
    )
}

export default Films;