import React from "react";
import { useSelector } from "react-redux";

// interface Props {
//   userData?: any;
// }

export default function ThirdTab() {
  const user = useSelector((state: any) => state.user.user.user);
  return (
    <div className="text-sm">
      <div className="p-2 border-b border-[1px_solid_rgba(230_230_230_1)]">
        <div className="flex justify-between my-8 items-center">
          <span className="">Email address</span>
          <span className="text-[#757575]"> {user.email}</span>
        </div>
        <div className="flex justify-between my-8 items-center">
          <span className="">Username and subdomain</span>
          <span className="text-[#757575]">@Username</span>
        </div>
        <div className="flex justify-between my-8 items-center">
          <div className="flex flex-col">
            <span className="">Profile information</span>
            <span className="text-[#757575] text-xs">
              Edit your photo, name, bio, etc.
            </span>
          </div>
          <div className="text-[#757575]">{user.name}</div>
        </div>
      </div>

      <div className="p-2 border-b border-[1px_solid_rgba(230_230_230_1)]">
        <button className="block flex-[1_1_0px] my-8">
          <span className="text-[#c94a4a] block text-start">
            Deactivate account
          </span>
          <div className="text-[#757575] text-start">
            Deactivating will suspend your account until you sign back in.
          </div>
        </button>
        <button className="block flex-[1_1_0px] my-8">
          <span className="text-[#c94a4a] block text-start">
            Delete account
          </span>
          <div className="text-[#757575] text-start">
            Permanently delete your account and all of your content.
          </div>
        </button>
      </div>
    </div>
  );
}
