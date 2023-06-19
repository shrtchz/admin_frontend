import React, { useEffect, useState } from "react";
import "./settings.css";
import * as BsIcon from "react-icons/bs";
import * as BiIcon from "react-icons/bi";
import * as AiIcon from "react-icons/ai";
import Input from "./Input";
import axios from "axios";

const url ='https://shrtchz.pw/api/admin-profile/show-rate'
const updateUrl ='https://shrtchz.pw/api/admin-profile/update-rate' 
const authToken =localStorage.getItem('token')
const FeesTaxes = () => {
  const [fee, setFee] = useState('');
  const [tax, setTax] = useState('');
  const [comm, setComm] = useState('');
  const [cash, setCash] = useState('');


  const handleDelete = () => {
    console.log("Deleted");
  };

  const fetchData= async() =>{
    try {
      const authToken= localStorage.getItem('token')
  let res=await axios.get(`${url}`,{headers: {
    Authorization: `Bearer ${authToken}`}
  })
  
  console.log(res.data.data)
  setFee(res.data.data.per_fee)
  setTax(res.data.data.per_tax)
  setComm(res.data.data.per_commission)
  setCash(res.data.data.per_cashback)

    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    fetchData()
  }, [])
  const handleFee= (e)=>{
   e.preventDefault()
    let input =e.target.value
  //  console.log("Fee",input)
    setFee(input);
  }
  const handleComm= (e)=>{
    e.preventDefault()
    let input =e.target.value
    // console.log("Comm",input)
    setComm(input);
  }
  const handleTax = (e)=>{
   e.preventDefault()
    let input =e.target.value
  //  console.log("Tax",input)
    setTax(input);
  }
  const handleCash =(e)=>{
    e.preventDefault()
    let input =e.target.value
    // console.log("Cash",input)
    setCash(input);
  }
  const handleSave= async(e)=>{
    e.preventDefault()
    try {
    console.log("Clikced")
    let data={per_cashback:cash, per_fee:fee, per_commission:comm, per_tax:tax}

      let res= await axios.put('https://shrtchz.pw/api/admin-profile/update-rate',data, { headers:{ Authorization: `Bearer ${authToken}` }  });
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
      <div className="d-flex flex-column w-100">
        <header className="container-fluid d-flex flex-column justify-content-center">
          <div className="row align-items-center justify-content-between ">
            <div className="col-7">
              <div className="d-flex justify-content-between allsicons">
                <div>
                  <BsIcon.BsTrash3
                    className="sicon"
                    size={20}
                    onClick={handleDelete}
                  />
                </div>
                <div className="">
                  <BiIcon.BiPowerOff className="sicon" size={25} />
                </div>
                <div className="">
                  <AiIcon.AiOutlineStop className="sicon" size={25} />
                </div>
              </div>
            </div>
            <div></div>
            <div className="col-1 d-flex ">
              <div></div>
            </div>
          </div>
        </header>
        <div className="mx-3 ">
        <form onSubmit={handleSave} >
          <div className="fee mb-1">
            <span className="mx-5">Service Fees</span>
            <div className="d-flex ">
              <Input value={fee} onChange={handleFee} />
            </div>
          </div>
          <div className="commission mb-1">
            <span className="mx-5">Commissions</span>
            <div className="d-flex  ">
              <Input value={comm} onChange={handleComm} />
            </div>
          </div>
          <div className="tax mb-1">
            <span className="mx-5">Tax</span>
            <div className="d-flex  ">
              <Input value={tax} onChange={handleTax} />
            </div>
          </div>
          <div className="Cashback mb-1">
            <span className="mx-5 ">Cashback</span>
            <div className="d-flex  ">
              <Input value={cash} onChange={handleCash} />
            </div>
          </div>
         <div className="mx-5 col-4">
            <button type="submit" className="submit_btn w-100">Save</button>
         </div>
        
        </form>
        <div className="mx-5 col-4">
         <button type="submit" className="submit_btn w-100 mt-2 ">Cancel</button>
         </div>
        </div>
      </div>
    </>
  );
};

export default FeesTaxes;
