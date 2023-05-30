import React,{useRef,useEffect,useState} from 'react'
import './modal.css'
import * as IoIcons from 'react-icons/io'

const Modal = ({isOpened, isClosed, selectedColumns:initialSelectedColumns,handleModalCheck, itemsPerPage,handleDataAmountButtonClick,handleDataAmountSelect,
}) => {
    
    const applyButtonRef = useRef(null);
    const [selectedColumns, setSelectedColumns] = useState(initialSelectedColumns);
  const [selectedColumnsToApply, setSelectedColumnsToApply] = useState(initialSelectedColumns);
//   const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);

  useEffect(() => {
    handleModalCheck(selectedColumnsToApply);
  }, [handleModalCheck, selectedColumnsToApply]);

  useEffect(() => {
    setSelectedColumnsToApply(selectedColumns);
  }, [selectedColumns]);

  useEffect(() => {
    const applyAndCloseModal = () => {
        setSelectedColumns(selectedColumnsToApply);
      handleDataAmountButtonClick(); 
      handleDataAmountSelect(selectedItemsPerPage); 
      isClosed(); 
    };

    const applyButton = applyButtonRef.current;

    if (applyButton) {
      applyButton.addEventListener('click', applyAndCloseModal);
    }
    
    return () => {
        if (applyButton) {
          applyButton.removeEventListener('click', applyAndCloseModal);
        }
      };
    }, [isClosed, handleDataAmountButtonClick, handleDataAmountSelect, selectedItemsPerPage]);
  
  
    
    
    if (!isOpened) {
        return null;
      }
      
      
      const handleItemsPerPageChange = (e) => {
        setSelectedItemsPerPage(e.target.value);
      };
      const handleCheckboxChange = (column) => {
        setSelectedColumnsToApply((prevSelectedColumns) => {
          const updatedColumns = prevSelectedColumns.includes(column)
            ? prevSelectedColumns.filter((c) => c !== column)
            : [...prevSelectedColumns, column];
    
          return updatedColumns;
        });
      };
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
                    <div>   
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumnsToApply.includes('userId')}
                            onChange={() => handleCheckboxChange('userId')}
                        />
                        User ID
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumnsToApply.includes('email')}
                            onChange={() => handleCheckboxChange('email')}
                        />
                        Email
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumnsToApply.includes('ipAddress')}
                            onChange={() => handleCheckboxChange('ipAddress')}
                        />
                        IP Address
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumnsToApply.includes('action')}
                            onChange={() => handleCheckboxChange('action')}
                        />
                        Action
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={selectedColumnsToApply.includes('lastLogin')}
                            onChange={() => handleCheckboxChange('lastLogin')}
                        />
                        Last Login
                        </label>
                    </div> 
                    </div>
                </div>
                <div className='sect d-flex mx-4 mt-1 align-items-center justify-content-between'>
                    <div >
                     <p className='text'>Records per page</p>

                    </div>
                    <select className='pageoption'    id="dataAmountSelect"
                    value={selectedItemsPerPage}
                    onChange={handleItemsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>

                    {/* <option value={100}>100</option> */}
                    </select>
                </div>
                <div className='d-flex justify-content-end m-4 '>
                    <div className='d-flex justify-content-between bn'>
                    <button className='bt px-2' onClick={isClosed}>Cancel</button>
                    <button className='bt px-2' ref={applyButtonRef}>Apply</button>
                    </div>

                </div>
             </div>
        </div>
    
  )
}

export default Modal