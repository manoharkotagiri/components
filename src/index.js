import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard> <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!"
                                          avatar={'https://source.unsplash.com/random'}/> </ApprovalCard>
            <ApprovalCard> <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="React is the best"
                                          avatar={'https://source.unsplash.com/random'}/> </ApprovalCard>
            <ApprovalCard> <CommentDetail author="Jane" timeAgo="Yesterday at 5:45PM" content="I am learning React"
                                          avatar={'https://source.unsplash.com/random'}/> </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));