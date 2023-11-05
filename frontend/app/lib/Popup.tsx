import { PopupTypes } from '../constants/PopupTypes'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
interface Props {
  open: boolean,
  message: string,
  type: PopupTypes,
  setOpen: (open: boolean) => void,
}

//  fixed popup on right bottom usin tailwind
// popup should have a close button
export default function Popup(props: Props) {
  return (
    <div className={`fixed bottom-0 right-0 m-8 z-50 flex bg-${props.type} border-2 border-gray-500 rounded-xl ${props.open ? 'block' : 'hidden'}`}>
      <div className="flex flex-1 items-center p-3">
        <div className="text-2xl flex-1 text-white font-bold">{props.message}</div>
        <button className="text-white px-4 text-2xl py-2 rounded" onClick={() => props.setOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}
