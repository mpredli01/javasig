Meteor.startup(function () {
    if(Contributors.find().count() === 0) {
        Contributors.insert({
            contributor: 'Chariot Solutions',
            address: '515 Pennsylvania Ave, Suite 202',
            city: 'Fort Washington',
            state: 'Pennsylvania',
            zip: '19034',
            url: 'http://www.chariotsolutions.com/'
            });
        Contributors.insert({
            contributor: 'Jet Brains (East Coast American Sales)',
            address: '324 New Brooklyn Road',
            city: 'Berlin',
            state: 'New Jersey',
            zip: '08009',
            url: 'http://www.jetbrains.com/'
            });
        }
    });
