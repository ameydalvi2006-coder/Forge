const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl">
        {children}
        <button onClick={onClose} className="mt-4 text-purple-400">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
