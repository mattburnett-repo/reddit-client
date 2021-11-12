import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getComments, selectComments, selectIsLoading } from './commentsSlice';
import CommentList from '../../components/comments/CommentsList';

export default function Comments(props) {
    const article_id = props.match.params.article_id;

    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);

    useEffect(() => {
        async function loadData() { // add authIsExpired test
            await dispatch(getComments(article_id));
          }; 

        loadData();
    }, [article_id, dispatch]); 
    
    return (
        <div>
            <h3>Comments</h3>
            <CommentList isLoading={isLoading} comments={comments}/>
        </div>
    )
};