'user client'

import classNames from "classnames";
import { IconType } from "react-icons"


interface CategoryInputProps {
    icon:IconType,
    label:string,
    selected?:boolean,
    onClick: (value : string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
  return (
        <div
              onClick={() => onClick(label)}
              className={classNames("rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer", {
                    "border-black": selected,
                    "border-neutral-200": !selected,
              })}
        >
              <Icon size={30} />
              <div className='font-semibold'>{label}</div>
        </div>
  );
}

export default CategoryInput