import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard(){
    return(
        <div className="card">
            <Card style= {{width: "18rem"}}>
                <Card.Body>
                    <Card.Title>Noah</Card.Title>
                    <Card.Text>
                        This is the coolest guy in town.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard