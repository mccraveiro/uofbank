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
                                {
                                    date: '23 December',
                                    name: 'Madson Pub',
                                    amount: 21.42
                                },
                                {
                                    date: '5 December',
                                    name: 'Home Depot',
                                    amount: 78.63
                                }
                            ]
                        },
                        '2014': {
                            '1': [
                                {
                                    date: '02 January',
                                    name: 'Walmart',
                                    amount: 221.42
                                },
                                {
                                    date: '12 January',
                                    name: 'Tim Hortons',
                                    amount: 5.23
                                },
                                {
                                    date: '20 January',
                                    name: 'Subway',
                                    amount: 13.42
                                }
                            ],
                            '2': [
                                {
                                    date: '01 February',
                                    name: 'Nosso Talho',
                                    amount: 121.42
                                },
                                {
                                    date: '09 February',
                                    name: 'Second Cup',
                                    amount: 3.23
                                },
                                {
                                    date: '17 February',
                                    name: 'Burger King',
                                    amount: 13.42
                                }
                            ],
                            '3': [
                                {
                                    date: '08 March',
                                    name: 'Lobslaw',
                                    amount: 271.42
                                },
                                {
                                    date: '19 March',
                                    name: 'Starbucks',
                                    amount: 10.03
                                },
                                {
                                    date: '27 March',
                                    name: 'McDonalds',
                                    amount: 6.03
                                }
                            ]
                        }
                    }
                },
                {
                    id: 3,
                    name: 'Visa',
                    number: '3638 XXXX XXXX 9371',
                    amount: 423.45,
                    transactions: {
                        '2013': {
                            '12': [
                                {
                                    date: '21 December',
                                    name: 'Tequila Jack',
                                    amount: 35.00
                                },
                                {
                                    date: '4 December',
                                    name: 'Apple Store',
                                    amount: 280.00
                                }
                            ]
                        },
                        '2014': {
                            '1': [
                                {
                                    date: '19 January',
                                    name: 'Mr. Sub',
                                    amount: 14.12
                                },
                                {
                                    date: '14 January',
                                    name: 'B.R.A.Z.1.L',
                                    amount: 23.13
                                },
                                {
                                    date: '6 January',
                                    name: 'Tim Hortons',
                                    amount: 12.51
                                }
                            ],
                            '2': [
                                {
                                    date: '28 February',
                                    name: 'Noka',
                                    amount: 21.42
                                },
                                {
                                    date: '4 February',
                                    name: 'Second Cup',
                                    amount: 8.00
                                },
                                {
                                    date: '2 February',
                                    name: 'Second Cup',
                                    amount: 7.51
                                }
                            ],
                            '3': [
                                {
                                    date: '18 March',
                                    name: 'McDonalds',
                                    amount: 10.00
                                },
                                {
                                    date: '11 March',
                                    name: 'McDonalds',
                                    amount: 11.27
                                },
                                {
                                    date: '1 March',
                                    name: 'Gap',
                                    amount: 82.83
                                }
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
