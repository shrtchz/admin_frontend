import React from 'react'
import './allusersmodal.css'
import * as IoIcons from 'react-icons/io'

const AllUsersModal = ({isOpened, isClosed, selectedColumns,handleModalCheck}) => {
    if (!isOpened) {
        return null;
      }
  return (
    
        <div className="modal-content position-absolute top-0 align-items-center" >
             <div className='cont  h-50'>
                <div className='title d-flex m-4 justify-content-between' >
                    <h5>List Setup</h5>
                    <IoIcons.IoMdClose onClick={isClosed}/>
                </div>
                <div className='para mx-4'>
                    <p className='text'>Use the checkboxes to select columns you want to see in the list.</p>
                </div>
                <div className='checks mx-4'>
                    <div className='m-4'>
                    <div className='d-flex justify-content-between'>   
                        <label className=''>
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes('Name')}
                            onChange={() => handleModalCheck('Name')} 
                        />
                        Name
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes('Username')}
                            onChange={() => handleModalCheck('Username')}
                        />
                        Username
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes('Email')}
                            onChange={() => handleModalCheck('Email')}
                        />
                       Email
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes('Registered')}
                            onChange={() => handleModalCheck('Registered')}
                        />
                        Registered
                        </label>
                    </div>
                        <div>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Last Seen')}
                                onChange={() => handleModalCheck('Last Seen')}
                            />
                            Last Seen
                            </label>
                        </div> 
                         <div>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Birthdate')}
                                onChange={() => handleModalCheck('Birthdate')}
                            />
                            Birthdate
                            </label>
                        </div> <div>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Location')}
                                onChange={() => handleModalCheck('Location')}
                            />
                            Location
                            </label>
                        </div> <div>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Status')}
                                onChange={() => handleModalCheck('Status')}
                            />
                            Status
                            </label>
                        </div> <div>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Bio')}
                                onChange={() => handleModalCheck('Bio')}
                            />
                            Bio
                            </label>
                        </div> 
                        <div >
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('Portfolio')}
                                onChange={() => handleModalCheck('Portfolio')}
                            />
                            Portfolio
                            </label>
                        </div> 
                        <div className='d-flex justify-content-between'>
                            <label>
                            <input
                                type="checkbox"
                                checked={selectedColumns.includes('AccountType')}
                                onChange={() => handleModalCheck('AccountType')}
                            />
                                AccountType
                            </label>
                        </div> 
                    </div>
                </div>
                <div className='sect d-flex mx-4 mt-1 align-items-center justify-content-between'>
                    <div >
                     <p className='text'>Records per page</p>

                    </div>
                    <select className='pageoption'>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
                <div className='d-flex justify-content-end m-4 '>
                    <div className='d-flex justify-content-between bn'>
                    <button className='bt px-2' onClick={isClosed}>Cancel</button>
                    <button className='bt px-2'>Apply</button>
                    </div>

                </div>
             </div>
        </div>
    
  )
}

export default AllUsersModal