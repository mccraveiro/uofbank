angular.module('uofbank.db', [])
    .factory('DB', function () {

        var data = {
            accounts: [
                {
                    id: 1,
                    name: 'Checking',
                    number: '4567 XXXX XXXX 1234',
                    amount: 123.45
                },
                {
                    id: 2,
                    name: 'Savings',
                    number: '4567 XXXX XXXX 4321',
                    amount: 987.65
                }
            ],
            notifications: [
            
            ]
        };

        return {
            data: data
        };
    });
