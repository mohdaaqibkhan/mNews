import React from 'react'

const NewsItem=(props)=>{
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div >
        <div className="card m-1 mb-4">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className=" badge rounded-pill bg-secondary " >{source}</span>
          </div>
          <img src={!imageUrl?"https://www.cnet.com/a/img/resize/d0c85088d81b5192b4fe5810da5a854a0d5c4acb/hub/2022/10/12/244f4a47-658a-413c-ae31-9fe69cf34cd5/iphone-14-family-all-0466.jpg?auto=webp&fit=crop&height=630&width=1200":imageUrl}  className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}  </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem