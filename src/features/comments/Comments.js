// all the logic here, then call display 

import CommentList from "../../components/comments/CommentsList"


// TODO: mock data from json pull?
export default function Comments() {
    return (
        <div>
            <h3>Comments</h3>
            <CommentList />
        </div>
    )
}