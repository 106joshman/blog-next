import Link from "next/link";
import React from "react";
import { BiUser, BiLogOutCircle } from "react-icons/bi";
import { PiReadCvLogo } from "react-icons/pi";
import { SlNote } from "react-icons/sl";
import { ImStatsBars2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

//  closeModal, openModal, isOpen,  showBar,
interface PropTypes {
  setShowBar: any;
  setShow: any;
}

export default function MobileMenu({ setShowBar, setShow }: PropTypes) {
  const token = useSelector(
    (state: any) => state.persistedReducer.user.accessToken
  );
  const router = useRouter();

  const handleLogout = async (e: any) => {
    setShowBar(false);

    try {
      router.push("/auth/login");
    } catch (error) {
      console.error("error signing out:", error);
    }
  };
  return (
    <nav className="border border-[1px_solid_rgba(230_230_230_1)] roundedmd shadow-lg p-4 h-screen w-1/2 z-50 fixed top-20 text-[#757575] left-0 bg-white transition duration-150 ease-in-out">
      <ul className="text-start text-sm space-y-3 mb-5">
        <li className="py-5">
          {token ? (
            <Link
              href="/write-new"
              className="py-1.5 pr-4 flex items-center"
              onClick={() => setShowBar(false)}
            >
              <SlNote className=" items-center mr-3" color="black" /> Write
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="py-1.5 pr-4 flex items-center"
              onClick={() => setShowBar(false)}
            >
              <SlNote className=" items-center mr-3" color="black" /> Write
            </Link>
          )}
        </li>

        <li>
          <Link
            href="/profile"
            className="py-1.5 pr-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <BiUser className="text-lg mr-3" color="black" /> Profile
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="py-1.5 pr-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <PiReadCvLogo className="text-lg mr-3" color="black" /> Stories
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="py-1.5 pr-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            <ImStatsBars2 className="text-lg mr-3" color="black" /> Stats
          </Link>
        </li>
      </ul>

      <div className="w-full border-t border-[#cfcccc] absolute left-0"></div>

      {token ? (
        <div className="my-5">
          <button
            className="pt-5 pb-1.5 pr-4 flex items-center"
            onClick={handleLogout}
          >
            <BiLogOutCircle className="text-lg mr-3" /> Log Out
          </button>
        </div>
      ) : (
        <div className="my-5 space-y-3 ">
          <Link
            href="/auth/login"
            className="pt-5 pb-1.5 pr-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="py-1.5 pr-4 flex items-center"
            onClick={() => setShowBar(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
