import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import getPost from "../../actions/getPost";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const RawPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});

	useEffect(() => {
		var load = false;
		getPost({
			id,
			setPost,
			load,
		});
	}, []);

	return (
		<div style={{ margin: '2%' }}>
			<pre>{post.code}</pre>
		</div>
	);
};

export default RawPage;
