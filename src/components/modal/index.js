import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import "./modal.css";

import PhotoCard from "../photoCard";

import { getPhotoById, clearPhotoById } from "../../store/actions/photos";
import { hideModal } from "../../store/actions/modal";

export function Modal() {
  const photo = useSelector((state) => state.photos.photoPreview);
  const modalActive = useSelector((state) => state.modal.showModal);

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(clearPhotoById());
    dispatch(getPhotoById(id));
  }, [id]);

  const handleHideModal = () => {
    dispatch(hideModal());
    dispatch(clearPhotoById());
    history.goBack();
  };

  return (
    <div
      className={modalActive ? "modal modalActive" : "modal"}
      onClick={handleHideModal}
    >
      <div
        className={
          modalActive ? "modalContent modalContentActive" : "modalContent"
        }
        onClick={(event) => event.stopPropagation()}
      >
        <button className="btnClose" onClick={handleHideModal}></button>

        {photo === null ? (
          <div className="modalLoading">
            <p>Loading ...</p>
          </div>
        ) : (
          <PhotoCard photo={photo} />
        )}
      </div>
    </div>
  );
}
