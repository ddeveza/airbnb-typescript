/** @format */
"use client";
import classNames from "classnames";
import { IconType } from "react-icons";

interface ButtonProps {
      label: string;
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
      outline?: boolean;
      small?: boolean;
      icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, icon: Icon, outline, small }) => {
      return (
            <button
                  onClick={onClick}
                  disabled={disabled}
                  className={classNames("relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 w-full", {
                        "bg-white border-black text-black": outline,
                        "bg-rose-500 border-rose-500 text-white": !outline,
                        "py-1 text-sm font-light border-[1px]": small,
                        "py-3 text-md font-semibold border-2": !small,
                  })}
            >
                  {Icon && <Icon size={24} className='absolute left-4 top-3' />}
                  {label}
            </button>
      );
};

export default Button;
