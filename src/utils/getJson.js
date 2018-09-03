const getJSONObject = (keyWord, skip, take) => {
    return new Promise((resolve, reject) => {
        fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${keyWord}&Skip=${skip}&Take=${take}`)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                resolve(json);
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    });
}

export default getJSONObject;