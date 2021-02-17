const checkboxChange = ({ e, getPosts, setPosts, posts, setLoading, loading, tokenData }) => {
    if (e.target.checked) {
        setPosts(posts.filter(post => post.createdBy === tokenData.username));
    } else {
        var load = false;
        getPosts({ setPosts, setLoading, loading, load });
    }
};

export default checkboxChange;