import React, { useState } from 'react';
import CardMarketing from './subcomponents/cardMarketing';

const Marketing = props => {
    const [state, setState] = useState({
        marketings: [
            {
                title: 'Card Title 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                link: {
                    url: '/#',
                    label: 'Learn More'
                }
            },
            {
                title: 'Card Title 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                link: {
                    url: '/#',
                    label: 'Learn More'
                }
            },
            {
                title: 'Card Title 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                link: {
                    url: '/#',
                    label: 'Learn More'
                }
            },
        ]
    });

    /* const [marketings, setMarketings] = useState([
        {
            title: 'Card Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
            link: {
                url: '/#',
                label: 'Learn More'
            }
        },
        {
            title: 'Card Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
            link: {
                url: '/#',
                label: 'Learn More'
            }
        },
        {
            title: 'Card Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
            link: {
                url: '/#',
                label: 'Learn More'
            }
        },
    ]); */

    return (
        <div className="row">
            {
                state.marketings.length > 0 && 
                state.marketings.map((item, index) => {
                    return (
                        <div className="col-lg-4 mb-4" key={index}>
                            <CardMarketing {...item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Marketing;