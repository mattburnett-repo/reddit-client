// all the logic here, then call display 

import CommentList from "../../components/comments/CommentsList"

const mockData = [
    {
        id: 'test id 01',
        article_id: 'test article id 01',
        title: 'test title 01'
    },
    {
        id: 'test id 02',
        article_id: 'test article id 02',
        title: 'test title 02'
    },
    {
        id: 'test id 03',
        article_id: 'test article id 03',
        title: 'test title 03'
    }
];

export default function Comments() {
    return (
        <div>
            <h3>Comments</h3>
            <CommentList comments={mockData}/>
        </div>
    )
}