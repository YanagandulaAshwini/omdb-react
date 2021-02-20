import React from 'react';

export default function Display(props){
    return(
        <div className="class-responsive" style={{'margin-left':'0px'}}>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Poster</th>
                        <th scope="col">MovieName</th>
                        <th scope="col">Actors</th>
                        <th scope="col">Directors</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={props.poster}></img></td>
                        <td>{props.title}</td>
                        <td>{props.actors}</td>
                        <td>{props.director}</td>
                        <td>{props.genre}</td>
                        <td>{props.runtime}</td></tr>
                </tbody>
        </table>
        </div>
    )
}