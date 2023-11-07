import PropTypes from "prop-types";
import './Comment.css'

const Comment = ({ singleComment }) => {

    //destruct single comment
	const { comment,commentedUser,commentedUserImg } = singleComment || {};
	return (
		<div className="single-comment">
			<div className="owner-img">
				<img src={commentedUserImg} alt="" />
			</div>
            <div className="comment-info">
                <h2>{commentedUser}</h2>
                <p>{comment}</p>
            </div>
		</div>
	);
};
Comment.propTypes = {
	singleComment: PropTypes.object,
};
export default Comment;
