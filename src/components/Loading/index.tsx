import './style.css'
import { CircularProgress } from '@material-ui/core';
const Loading = () => {
  return (
    <div className='center-loading'>
      <CircularProgress thickness={4} />
    </div>
  );
};
export default Loading;
