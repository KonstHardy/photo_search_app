import { useDispatch } from "react-redux";

import "./iconLike.css";

import { addLike, removeLike } from "../../store/actions/like";

function IconLike(props) {
  const { photoId, photoLike } = props;

  const dispatch = useDispatch();

  // console.log(photoLike);

  return (
    <svg
      // className="like__icon"
      className={photoLike ? "like__icon-action" : "like__icon"}
      viewBox="0 0 16 16"
      onClick={() => {
        dispatch(addLike(photoId));
        // dispatch(removeLike(photoId));
      }}
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
}

export default IconLike;
