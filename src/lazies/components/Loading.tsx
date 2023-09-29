import "./loading.scss";
import Icon from './icon.png'
import LoadingIcon from './icon.png';
export default function Loading() {
  return (
    <div className="loading_container">
      <img
        className="rotating-image"
        src={LoadingIcon}
      />
    </div>
  );
}
