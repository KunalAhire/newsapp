import React from 'react'

const NewsItem = (props) => {
    let { title, discription, imageUrl, newsUrl,bgColor,text,author,date,source } = props;
    return (
      <div className='my-4 mx-1'>
        <div className={`card bg-${bgColor} text-${text}`} style={{width:"100%",minHeight:'380px'}}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
  {source}
  </span>
          <img src={imageUrl} className="card-img-top"style={{width:"100%",height:'180px'}} alt="..." />
            <div className="card-body">
              <h5 className='card-title'>{title}</h5>
              <p className="card-text">{discription}</p>
              <p className={`card-text fw-lighter text-${text}`}>By {author} At {new Date(date).toGMTString()}</p>
              <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-secondary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem