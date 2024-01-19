import React from 'react';
import { useLocation } from 'react-router-dom';
import { siteMetadata } from '../config/config';
import { Helmet } from 'react-helmet';

const Head = () => {

    const { pathname } = useLocation();

    const {title,siteUrl,image,description,facebookUsername} = siteMetadata

    const seo = {
        title: title,
        description: description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`,
      };


    return (
        <Helmet title={title} defaultTitle={seo.title} >

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />   

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={facebookUsername} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            <meta name="google-site-verification" content="iJMvJ3u0kqnC-Qo_IaPgdETE6efo-U8gWXeCUYyqtc8" />

        </Helmet>
    );
}

export default Head;
