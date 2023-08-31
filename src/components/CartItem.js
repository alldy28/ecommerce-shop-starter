import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  //destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div>
      <div>
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          <Link>
            {" "}
            <img className="max-w-[80px]" src={image} alt="" />{" "}
          </Link>
          <div className="w-full flex flex-col">
            <div div className="flex justify-between mb-2">
              <div>
                <Link to={`/product/${id}`}>{title}</Link>
              </div>
              <div className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>
            <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] bg-blue-400 items-center h-full border
            text-primary font-medium">
              <div div className = "flex-1 flex justify-center items-center cursor-pointer" >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
              <div>Item Price</div>
              <div>Final Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
