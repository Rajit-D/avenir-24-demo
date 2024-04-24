import React from "react";

export interface Props {
  para: string;
}

const Modal = ({ para }: Props) => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <button className="btn" onClick={openModal}>
        Learn more about this character
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{para}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
