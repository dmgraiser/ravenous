const apiKey = 'tC9XTiPliOeY34O9HJ5drwMx8Boetsl-pHBT7jqMpM6Xsof7vsTHepgef_QPP4rN-1VFHk-43c3izv63hLKf9DcTPEqf0jZxfBTF6Uqnh5nlODMHSri-LpITJiz-WnYx';
let Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=50`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};

export default Yelp;
