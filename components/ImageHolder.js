

const ImageHolder = ({imgList = [{url:"https://picsum.photos/200", caption:"test image"}]}) => {
    
    
    const num = imgList.length
    var img = imgList[0]

  return (
    <div className="ImageHolder">
    <div className="outer">
        <div className="inner"><img src={img.url} ></img></div>
        <div className="caption">{img.caption}</div>
    </div>
    </div>
  )


}

export default ImageHolder
