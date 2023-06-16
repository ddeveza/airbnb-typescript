/** @format */
"use client";
import Image from "next/image";

type Props = {};

const Avatar = (props: Props) => {
      return <Image className='rounded-full' alt='Avatar' height={30} width={30} src={"/images/placeholder.jpg"} />;
};

export default Avatar;
