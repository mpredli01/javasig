Meteor.publish("partners",function(options) {
    Counts.publish(this,'numberOfPartners',Partners.find({}),{ noReady: true });
    return Partners.find({},options);
    });
