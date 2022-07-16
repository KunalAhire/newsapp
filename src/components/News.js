import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

//document.title = `${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - Daily News`
const News = (props) => {
    document.title = `${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - Daily News`;
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0)

    const pagechange = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false)
    }

    useEffect(() => {
        pagechange();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        setpage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setloading(false)
    };

    //    const nextPage = async () => {
    //         setpage(page+1)
    //         pagechange();
    //     }
    //   const  prevPage = async () => {
    //         setpage(page-1)
    //         pagechange();
    //     }
    return (
        <>
            <h1 className={`text-center text-${props.text}`} style={{ margin: "40px 0" }}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} -Headlines</h1>
            {loading ? <Spinner /> :
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />} >
                    <div className='container'>
                        <div className='row '>
                            {articles.map((elements, index) => {
                                return <div className='col-sm-6 col-md-6 col-lg-3' key={elements.url}>
                                    <NewsItem text={props.text} source={elements.source.name} bgColor={props.bgColor} title={elements.title ? elements.title.slice(0, 45) + "..." : ""}
                                        discription={elements.description ? elements.description.slice(0, 60) + "..." : "Discription not available click button to read more"}
                                        imageUrl={elements.urlToImage ? elements.urlToImage : "https://i0.wp.com/spencerxsmith.com/wp-content/uploads/2015/01/News-image.png"}
                                        newsUrl={elements.url} author={elements.author ? elements.author : 'unknown'} date={elements.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            }
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'sports'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News