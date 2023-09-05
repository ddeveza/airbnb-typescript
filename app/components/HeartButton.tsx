/** @format */

"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import classNames from "classnames";

interface HeartButtonProps {
      listingId: string;
      currentUser?: SafeUser;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {
      const hasFavorited = false;
      const toggleFavorite = () => {};
      return (
            <div
                  onClick={toggleFavorite}
                  className='relative hover:opacity-80 transition cursor-pointer'
            >
                  <AiOutlineHeart
                        size={28}
                        className='fill-white absolute -top-[2px] -right-[2px]'
                  />
                  <AiFillHeart
                        size={24}
                        className={classNames({
                              "fill-rose-500": hasFavorited,
                              "fill-neutral-500/70": !hasFavorited,
                        })}
                  />
            </div>
      );
};

export default HeartButton;
