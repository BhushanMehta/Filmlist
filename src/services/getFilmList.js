const getFilmList = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        // this.setState({ totalReactPackages: data.total })
        let listOfFilms  = data;
        console.log(listOfFilms);
    })
    .catch(error => {
        // this.setState({ errorMessage: error.toString() });
        let isError = error;
        console.error('There was an error!', error);
    });
}

export default getFilmList