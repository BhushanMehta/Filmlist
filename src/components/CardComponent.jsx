import React from 'react';

const CardComponent = ({ films, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (            
            <>
                {films.map(film => (
                    <>
                        <div className='card' key={film.id}>
                            <div className='card-main'>
                                <div className='img-container'>Image</div>
                                <div className='text-container'>
                                    <h4 className='card-title'>{film.title}</h4>
                                    <div className='inline-col'>
                                        <div className='col'><div className='data-label'>Producer</div>{film.producer}</div>
                                        <div className='col'><div className='data-label'>Director</div>{film.director}</div>
                                    </div>

                                    <div className='inline-col'>
                                        <div className='col'><div className='data-label'>Release Date</div>{film.release_date}</div>
                                        <div className='col'><div className='data-label'>Running Time</div>{film.running_time}</div>
                                        <div className='col'><div className='data-label'>Rating</div>{film.rt_score}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </>
    );
}

export default CardComponent;