/** @format */

"use client";
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from 'query-string'

interface CategoryBoxProps {
      icon: IconType;
      label: string;
      selected: boolean;
    
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon:Icon, label, selected }) => {

      const router = useRouter();
      const params = useSearchParams()

      const handleClick = useCallback(() => {
            let currentQuery = {};
            //to check if params is empty
            if (params) {
                  currentQuery = qs.parse(params.toString());
            }

            const updatedQuery: any = {
                  ...currentQuery,
                  category: label,
            };

            if (params?.get("category") === label) {
                  delete updatedQuery.category; //to reset the existing query
            }
            const url = qs.stringifyUrl({ url: "/", query: updatedQuery }, { skipNull: true });
            router.push(url);

      }, [label,params,router]);

      return (
            <div
                  onClick={handleClick}
                  className={classNames("flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800", {
                        "border-b-neutral-800 text-neutral-800": selected,
                        "border-transparent text-neutral-500": !selected,
                  })}
            >
                  <Icon size={26} />
                  <div className='font-medium text-sm'>{label}</div>
            </div>
      );
};

export default CategoryBox;
