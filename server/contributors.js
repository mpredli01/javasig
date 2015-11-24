Meteor.publish("contributors",function(options) {
    Counts.publish(this,'numberOfContributors',Contributors.find({}),{ noReady: true });
    return Contributors.find({},options);
    });
