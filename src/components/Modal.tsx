import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  disabled?: boolean;
  actionLabel: string;
  title?: string;
  onClose: () => void;
  onSubmit: () => void;
  body: React.ReactElement;
  footer: React.ReactElement;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  disabled,
  actionLabel,
  title,
  onClose,
  onSubmit,
  body,
  footer,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus-within:outline-none bg-neutral-800 bg-opacity-70">
        <div className="w-full relative my-6 mx-auto h-full lg:h-auto lg:max-w-3xl lg:w-3/6">
          <div className="h-full w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-black outline-none focus:outline-none lg:h-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-10 rounded-t">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                onClick={handleClose}
                className="ml-auto p-1 border-0 text-white hover:opacity-70 transition"
              >
                <h1 className="font-extrabold text-xl">X</h1>
              </button>
            </div>
            {/* Body */}
            <div className="relative p-10 flex-auto">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
