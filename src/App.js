import React, { useState, useEffect } from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        alanbtn({
            key: '6f4501b7fecfbda2f62a2e88d54dd21a2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    // console.log(typeof(articles));
                    // console.log(articles);
                    setNewsArticles(articles.articles);
                    setActiveArticle(-1);
                    // console.log("logging successful");
                }
                else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if (command === 'open') {
                    const parsedNum = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;

                    const art = articles.articles[parsedNum - 1];
                    if (parsedNum > 20) {
                        alanBtn().playText('Please try that again')
                    }
                    else if (art) {
                        window.open(art.url, '_blank');
                        alanBtn.playText("Opening....")

                    }
                    console.log(number);

                }


            }

        });
    }, [])


    return (
        <div>
            <div style={{ padding: "0 5%", display: "flex", justifyContent: "space-around", alignItems: "center", width: '100%', }}>
                <img src="https://cdn-icons-png.flaticon.com/512/2899/2899415.png" style={{
                    height: '27vmin',
                    borderRadius: '15%',
                    padding: '0 5%',
                    margin: '3% 0'
                }} alt="Oops..." />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            {/* <h1>what does this app do/ what is this app</h1> */}
            {/* <h2>to get headlines say "give me the news from "</h2> */}
        </div>
    );
}

export default App;
