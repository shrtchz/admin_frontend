// export const categoryHeaders=  ['', 'Categories', 'Image', 'Status', ''];
export const renderImage = (imageUrl) => {
    return <img style={{height:'50px',width:'50px'}}src={imageUrl} alt="image" />;
  };
  

 export const categoryHeaders= {
    name: 'name',
    image: 'photo_url',
    // status: 'status',
  };
  export const subcategoryHeaders={
    name: 'name',
    image: 'photo_url',
    // id:'subcat_id',
    subcategory:'name'

  }
  export const marketsHeader={
    name: 'name',
    image: 'photo_url',
  }