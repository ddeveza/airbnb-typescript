'use client';

import classNames from "classnames";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id:string;
    label:string;
    type?:string;
    disabled?:boolean;
    formatPrice?:boolean;
    required?:boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
   id,
   errors,
   label,
   register,
   disabled,
   formatPrice,
   required,
   type= 'text'
}) => {
  return (
        <div className='w-full relative'>
              {formatPrice && (
                    <BiDollar
                          size={24}
                          className='text-neutral-700 absolute top-5 left-2'
                    />
              )}
              <input
                    id={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    placeholder=' '
                    type={type}
                    className={classNames('peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed', 
                    {
                        'pl-9' : formatPrice,
                        'pl-4': !formatPrice,
                        'border-rose-500 focus:border-rose-500' : errors[id],
                        'border-neutral-300 focus:border-black' : !errors[id],

                    }
                    )}
              />
              <label className={classNames('absolute text-md duration-100 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4', {
                'left-9' : formatPrice,
                'left-4' : !formatPrice,
                'text-rose-500' : errors[id],
                'text-zinc-400' : !errors[id]
              })}>
                {label}
              </label>
        </div>
  );
}

export default Input