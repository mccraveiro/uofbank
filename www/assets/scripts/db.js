angular.module('uofbank.db', [])
    .factory('DB', function () {

        var data = {
            accounts: [
                {
                    id: 1,
                    name: 'Checking',
                    number: '4567 XXXX XXXX 1234',
                    amount: 123.45,
                    transactions: {
                        '2013': {
                            '12': [
                                {
                                    date: '28 December',
                                    name: 'The Brunswick House',
                                    amount: 25.00
                                },
                                {
                                    date: '5 December',
                                    name: 'Home Hardware',
                                    amount: 28.00
                                }
                            ]
                        },
                        '2014': {
                            '1': [
                                {
                                    date: '20 January',
                                    name: 'Mr. Sub',
                                    amount: 10.00
                                },
                                {
                                    date: '13 January',
                                    name: 'EB Games',
                                    amount: 450.00
                                },
                                {
                                    date: '2 January',
                                    name: 'noFrills',
                                    amount: 132.51
                                }
                            ],
                            '2': [
                                {
                                    date: '28 February',
                                    name: 'Burger King',
                                    amount: 10.00
                                },
                                {
                                    date: '7 February',
                                    name: 'Canada Computers',
                                    amount: 98.00
                                },
                                {
                                    date: '2 February',
                                    name: 'Metro',
                                    amount: 157.01
                                }
                            ],
                            '3': [
                                {
                                    date: '13 March',
                                    name: 'McDonalds',
                                    amount: 10.00
                                },
                                {
                                    date: '8 March',
                                    name: 'Subway',
                                    amount: 15.00
                                },
                                {
                                    date: '2 March',
                                    name: 'Walmart',
                                    amount: 72.38
                                }
                            ],
                            '4': [

                            ]
                        }
                    }
                },
                {
                    id: 2,
                    name: 'Savings',
                    number: '4567 XXXX XXXX 4321',
                    amount: 987.65,
                    transactions: {
                        '2013': {
                            '12': [
                                
                            ]
                        },
                        '2014': {
                            '1': [

                            ],
                            '2': [

                            ],
                            '3': [

                            ],
                            '4': [

                            ]
                        }
                    }
                }
            ],
            notifications: [

            ]
        };

        return {
            data: data
        };
    });
