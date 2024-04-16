"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

const EventFormMultiple = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [inputList, setinputList] = useState([""]);
  const [collegeName, setCollegeName] = useState("");
  const [waNumber, setwaNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [ss, setSS] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [payID, setPayID] = useState("");
  const [spinner, setSpinner] = useState(false);

  const options = [
    "Enchanted Ensemble (₹150 for a team of 6)",
    "Mythicon - I - Fashion Show (₹250 for a team of 9-10)",
    "Mythicon - II - Cosplay (₹100)",
    "Fantasia Flicks (₹250 for the whole team)",
    "Mystical Controversy (₹70 for a team of 2)",
  ];

  const handleEvent = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleName = (e: any, index: number) => {
    const name = [...inputList];
    name[index] = e.target.value;
    setinputList(name);
  };

  const handleCollegeName = (e: any) => {
    setCollegeName(e.target.value);
  };

  const handleWANumber = (e: any) => {
    setwaNumber(e.target.value);
  };

  const handleAltNumber = (e: any) => {
    setAltNumber(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmailID(e.target.value);
  };

  const handlePaymentID = (e: any) => {
    setPayID(e.target.value);
  };

  let userInfo = {
    Name: inputList,
    Event: selectedValue,
    Alt_Number: altNumber,
    Whatsapp_Number: waNumber,
    Email: emailID,
    College_Name: collegeName,
    Payment_id: payID,
    payment_verified: false,
    entry: false,
  };

  const handleSS = (e:any) => {
    setSS(e.target.files[0]);
  };

  const handleremove = (index:number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, ""]);
  };


  return <>
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
  <div className="events flex justify-center items-center flex-col">
        <div className="rounded-xl w-[150%] bg-gradient-to-b from-[#00FFFF] to-black-500 p-[2px] mt-10 mb-10">
          <form className="text-white bg-[#01110A] flex justify-center items-center flex-col rounded-xl lg:w-[100%] w-[100%]">
        <p className="lg:text-[30px] text-[25px] lg:mb-[50px] mb-[30px] font-bold mt-10">
          Registration form
        </p>
        <div className="flex justify-between items-center flex-col w-[80%] mb-[50px]">
          <div className="flex justify-between items-center lg:flex-row flex-col-reverse w-full">
            <div className="lg:mt-0 mt-4">
              <p>
                UPI id: <b>8514012811@okbizaxis</b>
              </p>
              <br />
              <p>For any issues contact:</p>
              <p>
                Anirban Ghana (<i>Asst. Treasurer</i>)
              </p>
              <p>
                Mobile number: <b>8514012811</b>
              </p>
            </div>
            {/* <img
              src={qrcode}
              alt="QR code"
              className="h[150px] w-[150px]"
            /> */}
          </div>
          <div className="notes w-full">
            <div className="flex items-center flex-col mt-[30px] text-center">
              <b>Note:</b>
              <li className="text-[14px]">
                <i>Take a screenshot of the successful payment.</i>
              </li>
              <li className="text-[14px]">
                <i>Participant must be a present college student.</i>
              </li>
              <li className="text-[14px]">
                <i>The registration fee amount is non-refundable.</i>
              </li>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start flex-col relative left-[10px]">
          <label className="text-white flex items-start flex-col mb-5 text-[18px]">
            Event
            <div className="flex">
              <select
                id="dropdown"
                value={selectedValue}
                onChange={handleEvent}
                className="text-white text-[15px] lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-[#1E212B] mt-3"
              >
                <option value="" className="text-white">
                  Select...
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </label>
          {inputList.map((e, i) => {
            return (
              <label key={i} className="flex items-start flex-col mb-5 text-[18px]">
                Name
                <div className="flex justify-center items-center">
                  <input
                    type="text"
                    className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
                    placeholder="Participant Name"
                    name="name"
                    value={inputList[i]}
                    onChange={(e) => handleName(e, i)}
                  />
                  {inputList.length !== 1 && (
                    <button
                      className="ml-2"
                      onClick={() => handleremove(i)}
                    >
                      <LuMinusCircle className="text-[20px]" />
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button className="ml-1" onClick={handleaddclick}>
                      <FiPlusCircle className="text-[20px]" />
                    </button>
                  )}
                </div>
              </label>
            );
          })}
          <label className="flex items-start flex-col mb-5 text-[18px]">
            College Name
            <input
              type="text"
              className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your college name"
              name="collegeName"
              value={collegeName}
              onChange={(e) => handleCollegeName(e)}
            />
          </label>
          <label className="flex items-start flex-col mb-5 text-[18px]">
            WhatsApp number
            <input
              type="text"
              className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your WhatsApp number"
              name="WANumber"
              value={waNumber}
              onChange={(e) => handleWANumber(e)}
            />
          </label>
          <label className="flex items-start flex-col mb-5 text-[18px]">
            Alternate contact number
            <input
              type="text"
              className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your alternate number"
              name="altNumber"
              value={altNumber}
              onChange={(e) => handleAltNumber(e)}
            />
          </label>
          <label className="flex items-start flex-col mb-5 text-[18px]">
            Email address
            <input
              type="text"
              className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your email address"
              name="email"
              value={emailID}
              onChange={(e) => handleEmail(e)}
            />
          </label>
          <label className="flex items-center justify-center flex-col mb-5">
            Upload Payment Screenshot (only in .jpeg, .jpg and .png):
            <input
              type="file"
              className="text-white text-[16.5px] text-[12px] w-[220px] mt-4"
              name="email"
              onChange={handleSS}
              accept=".jpeg, .jpg, .png"
            />
          </label>
          <label className="flex items-start flex-col mb-5 text-[18px]">
            UPI transaction ID
            <input
              type="text"
              className="text-white lg:w-[420px] w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-transparent mt-3"
              placeholder="Enter your transaction ID"
              name="payment ID"
              value={payID}
              onChange={(e) => handlePaymentID(e)}
              required
            />
          </label>
        </div>
        {spinner ? (
          <div className="p-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
            >
              <style>{`.spinner_6kVp{transform-origin:center;animation:spinner_irSm .75s infinite linear}@keyframes spinner_irSm{100%{transform:rotate(360deg)}}`}</style>
              <path
                d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                className="spinner_6kVp"
              />
            </svg>
          </div>
        ) : (
          <button
            style={{ boxShadow: "3px 3px yellow" }}
            className="text-black mb-8 bg-black-500 mt-5 bg-cyan-400 font-semibold lg:px-6 px-3 lg:py-2 py-1 rounded-lg relative lg:left-0 left-[-10px] lg:bottom-[7px] bottom-[3px] lg:text-[18px] text-[14px]"
            // onClick={handleSubmit}
            disabled={spinner}
          >
            <span>Submit</span>
          </button>
        )}
      </form>
    </div>
  </div>
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
</>

};

export default EventFormMultiple;
