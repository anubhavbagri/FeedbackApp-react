import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;

  const navi = useNavigate();

  const clickHandler = () => {
    console.log('Hello');
    // if you ever wanna have to redirect after maybe updating something on the server & then wanna go to a new page
    navi('/about');
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Post;
