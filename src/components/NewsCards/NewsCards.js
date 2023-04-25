import React from 'react'
import { Grid, Grow, Typography } from '@mui/material'
import NewsCard from '../NewsCard/Newscard'
// import useStyles from './style';

const infoCards = [
  { color: "#00838f", title: 'Latest News:', text: "Give me the Latest news" },
  { color: "#1565c0", title: 'News by Category:', info: "Business, Entertainment, Science", text: "give me the latest technology news...." },
  { color: "#4527a0", title: 'News by Terms:', info: "Bitcoin, Smartphone, Technology", text: "what is up with the ....." },
  { color: "#283593", title: 'News by Sources:', info: "CNN, BBC News, Time,IGN, Buzzfeed", text: "Give me the news from (source.....)" }
]

const NewsCards = ({ articles, activeArticle }) => {
  // const classes = useStyles();

  

  if (!articles.length) {
    return (
      <Grow in>
        <Grid style={{width:"100%", padding:"0 5%", margin:"0"}} container alignItems="stretch" spacing={3}>
          {/* <Grid className={classes.container} container alignItems="stretch" spacing={3}> */}
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display:"flex", flexDirection:"column ", textAlign:"center"}}>
              <div  style={{ backgroundColor: infoCard.color, display: "flex", flexDirection:"column", justifyContent: "space-between", alignItems: "center", width:"100%", height:'45vh', padding:"10%", borderRadius: "10px" ,color: "white"}}>
                <Typography variant="h5" >{infoCard.title}</Typography>
                {infoCard ? (<Typography variant="h6">
                  <strong>
                    {infoCard.title.split(' ')[2]}
                  </strong> 
                  <br /> {infoCard.info}
                </Typography>) : null}

                <Typography variant="h6"> Try saying:<br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}

        </Grid>

      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid width="100%" padding="0 5%" margin="0" container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ disply: 'flex' }}>
            <NewsCard article={article} activeArticle={activeArticle } i={i} />
          </Grid>

        ))}
      </Grid>


    </Grow>
  );
}
export default NewsCards;