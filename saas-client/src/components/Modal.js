export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 w-full max-w-md p-6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}