import React from 'react'
import { useState, useEffect, createRef } from 'react'

import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'


// import useStyles from './styles';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {

    // console.log("active article", activeArticle, " value", i)
    // // const classes=useStyles();
    const [elrefs,setElrefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0, ref.current.offsetTop - 50);

    useEffect(()=>{
        setElrefs((refs)=>Array(20).fill().map((_,j)=> refs[j] || createRef()));
    },[]);

    useEffect(()=>{
        if(i===activeArticle && elrefs[activeArticle]){
            scrollToRef(elrefs[activeArticle ])
        }
    },[i,activeArticle,elrefs]);

    const useStyles = {
        activeCard: {
            borderBottom: '10px solid #22289a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',  
            borderBottom: '10px solid white',
            // backgroundColor:'red'
        },
    };

    return (
        <Card ref={elrefs[i]} style={activeArticle === i ? useStyles.activeCard : useStyles.card} >
            <CardActionArea href={url} target="_blank" style={{ padding: '8px' }}>
                <CardMedia style={{ height: "250px" }} component="img" height="250px  " image={urlToImage || "https://getmemetemplates.com/wp-content/uploads/2022/10/Sorry-english-1024x823.jpg"} title={title} />
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px', }}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2" align="right">{source.name}</Typography>
                </div>
                <Typography style={{ padding: "0 16px" }} gutterBottom variant="h5" component="h2">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between', }}>
                <Button size="small" color="primary" href={url} target="_blank">Learn More</Button>
                <Typography variant="h5" color="textSecondary" component="h2" align="right">{i + 1}</Typography>
            </CardActions>

        </Card>
    )
}

export default NewsCard;
// (style={borderBottom: '10px solid #22289a'})