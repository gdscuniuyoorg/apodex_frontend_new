import { ReactElement } from "react";
import Portal from "./Portal";

type BackdropProps = {
  children?: ReactElement;
  isOpen: boolean;
  onClose: () => void;
};

const Backdrop = ({ isOpen, onClose, children }: BackdropProps) => {
  if (!isOpen) return null;
  return (
    <Portal>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[1001]"
        onClick={onClose}
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-[1002] flex justify-center pt-[9rem]"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <Portal>
//       <div className={styles.overlay} onClick={onClose}>
//         <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//           <button className={styles.closeButton} onClick={onClose}>
//             &times;
//           </button>
//           {children}
//         </div>
//       </div>
//     </Portal>
//   );
// };

export default Backdrop;
