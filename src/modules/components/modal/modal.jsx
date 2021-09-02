import { Modal, Button } from "antd";
import "./modal.scss";

const ModalMovie = ({
  visible,
  closeModal,
  movieTitle,
  movieImages,
  onClickDetailMovie,
}) => {
  return (
    <>
      <Modal
        className="Modal"
        footer={[
          <Button
            id="BtnDetail"
            key="submit"
            type="primary"
            onClick={onClickDetailMovie}
          >
            Detail Movie
          </Button>,
        ]}
        title={movieTitle}
        visible={visible}
        onCancel={closeModal}
        width={"50%"}
        centered
      >
        <img src={movieImages} width="50%" />
      </Modal>
    </>
  );
};

export default ModalMovie;
