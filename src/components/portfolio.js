import React, { useState } from 'react';
import CardPortfolio from './subcomponents/cardPortfolio';

const Portfolio = props => {
    const [mainTitle, setMainTitle] = useState("Portfolio Heading");
    const [portfolio, setPortfolio] = useState([
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project One',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project Three',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project Four',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project Five',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
        {
            url: '/#',
            srcImg: 'http://placehold.it/700x400',
            title: 'Project Six',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
        },
    ]);

    return (
        <>
            <h2>{mainTitle}</h2>

            <div className="row">
                {
                    portfolio.length > 0 && 
                    portfolio.map((project, index) => {
                        return (
                            <div className="col-lg-4 col-sm-6 portfolio-item" key={index}>
                                <CardPortfolio {...project} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Portfolio;