<form className='content'>
            <div className='tile d-flex justify-content-between align-items-center px-3'>
                <span>Live Reporting</span>
                <div className='me-4'>
                    <select className='select_picks px-2'>
                    <option>Select event</option>
                    {event.map((item, index) => (
                <option key={index} value={item.pic_id}>
                  {item.question}
                </option>
              ))}
                </select>
                </div>
              <span className='icons d-flex justify-content-between'>
                <BsIcons.BsArrowsAngleContract />
                <IoIcons.IoMdClose onClick={isClose} />
              </span>
            </div>
            <div className='box'>
                <div className='d-flex flex-column ms-2 box1 justify-content-center mb-3'>
                    <div className='d-flex align-items-center mt-1 '>
                        <label className='d-flex justify-content-center align-items-center mx-4 p-3 text'>Reporting</label>
                        <input type='text'/>
                    </div>
                    <div className='d-flex align-items-center mt-1 '>
                        <label className='d-flex justify-content-center align-items-center mx-4 p-3 text'>Header</label>
                        <input type='text'/>
                    </div>
                    <div className='d-flex align-items-center mt-1 '>
                        <label className='d-flex justify-content-center align-items-center mx-4 p-3 text'>Sub Header</label>
                        <input type='text'/>
                    </div>
                    <div className='d-flex align-items-start mt-1  '>
                        <label className='d-flex justify-content-center align-items-center mx-4 p-3 text'>Add a report</label>
                        <textarea type='text'>
                            loremConsectetur elit in eiusmod exercitation tempor laborum. Magna esse excepteur do sint esse magna ipsum ullamco adipisicing sit dolor duis. Eiusmod fugiat magna tempor do.
                            loremConsectetur elit in eiusmod exercitation tempor laborum. Magna esse excepteur do sint esse magna ipsum.
                            loremConsectetur elit in eiusmod exercitation tempor laborum. Magna esse excepteur do sint esse magna ipsum.
                        </textarea>
                    </div>
                
               


                </div>
                <div className='d-flex flex-column ms-2 box1 justify-content-center mb-3'>
                <div className='d-flex align-items-center mt-1 '>
                     
                        <UploadImage/>
                    </div>
                
                </div>
            </div>
        </form>