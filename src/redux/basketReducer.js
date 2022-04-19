let initialState = {
    baskets: [
        {
            id: 1,
            photo: <img src="https://sochi.mirplatev.ru/wa-data/public/shop/products/91/20/2091/images/2510/2510.280x400.jpg" alt="Anj" />,
            description: 'The dress 1',
            price: 'Price 1',
        },
        {
            id: 2,
            photo: <img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="Anj" />,
            description: 'The dress 2',
            price: 'Price 2',
        },
    ]
}

const basketReducer = (state = initialState, action) => {
    return state;
}

export default basketReducer;