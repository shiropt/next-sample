"use client";
import styled from "styled-components";
import { FC } from "react";
import Modal from "react-modal";
import { Button } from "../../atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../libs/redux";
import { showModal } from "../../../libs/redux/modal";
type Props = {};

export const ConfirmModal: FC<Props> = (props) => {
  Modal.setAppElement("#root");
  const isShowModal = useSelector((state: any) => state.modalReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <button onClick={() => dispatch(showModal({ isShow: true, title: "", okButton: "ok", cancelButton: "" }))}>
        モーダルを開く
      </button> */}
      <ModalWrapper
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
        isOpen={isShowModal.isShow}
      >
        <h2>Add content</h2>
        <ButtonWrapper>
          <ModalButton
            onClick={() =>
              dispatch(
                showModal({
                  isShow: false,
                  title: "",
                  okButton: "ok",
                  cancelButton: "",
                })
              )
            }
            variant="Important"
          >
            {isShowModal.okButton}
          </ModalButton>
          <ModalButton
            onClick={() =>
              dispatch(
                showModal({
                  isShow: false,
                  title: "",
                  okButton: "ok",
                  cancelButton: "",
                })
              )
            }
            variant="Primary"
          >
            {isShowModal.cancelButton}
          </ModalButton>
        </ButtonWrapper>
      </ModalWrapper>
    </div>
  );
};

ConfirmModal.displayName = "ConfirmModal";
const ModalWrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  border-radius: 5px;
  background-color: #242d33;
`;
const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`;
const ModalButton = styled(Button)`
  margin: 4px 4px 0 4px;
  width: 100%;
`;
