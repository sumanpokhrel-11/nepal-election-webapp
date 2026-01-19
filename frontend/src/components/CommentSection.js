import React, { useState } from 'react';

// --- MOCK DATA ---
const initialComments = [
  { id: 1, user: 'Citizen1', text: 'Important election for our area. We need to choose wisely.' },
  { id: 2, user: 'VoterX', text: 'What are the key promises from each candidate?' },
];
// --- END MOCK DATA ---

const CommentSection = ({ constituencyId }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const commentToAdd = {
      id: comments.length + 1,
      user: 'CurrentUser', // This would come from user auth state
      text: newComment,
    };
    setComments([...comments, commentToAdd]);
    setNewComment('');
    // In a real app, this would POST to the /comments endpoint
  };

  const commentListStyle = { listStyle: 'none', padding: 0 };
  const commentItemStyle = { borderBottom: '1px solid #eee', padding: '1rem 0' };
  const textAreaStyle = { width: '100%', minHeight: '80px', padding: '0.5rem', marginTop: '1rem' };
  const buttonStyle = { marginTop: '0.5rem', padding: '0.6rem 1.2rem' };

  return (
    <div>
      <ul style={commentListStyle}>
        {comments.map(comment => (
          <li key={comment.id} style={commentItemStyle}>
            <strong>{comment.user}:</strong>
            <p style={{ margin: '0.5rem 0 0 0' }}>{comment.text}</p>
          </li>
        ))}
      </ul>
      <div>
        <textarea
          style={textAreaStyle}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
        />
        <button style={buttonStyle} onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
