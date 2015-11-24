Meteor.startup(function () {
    if(Partners.find().count() === 0) {
        Partners.insert({
            partner: 'Princeton Java Users Group and NJFlex',
            leader: 'Yakov Fain',
            city: 'Princeton',
            state: 'New Jersey',
            url: 'http://www.meetup.com/NJFlex/'
            });
        Partners.insert({
            partner: 'Capital District Java Developers Network',
            leader: 'Dan Patsey',
            city: 'Albany',
            state: 'New York',
            url: 'http://www.cdjdn.com/'
            });
        Partners.insert({
            partner: 'New York Java SIG',
            leader: 'Frank Greco',
            city: 'New York',
            state: 'New York',
            url: 'http://www.javasig.com/'
            });
        Partners.insert({
            partner: 'Philly Java Users Group',
            leader: 'Michael Geiser',
            city: 'Philadelphia',
            state: 'Pennsylvania',
            url: 'http://phillyjug.com/'
            });
        }
    });
