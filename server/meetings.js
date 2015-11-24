Meteor.publish("meetings",function(options) {
    Counts.publish(this,'numberOfMeetings',Meetings.find({}),{ noReady: true });
    return Meetings.find({},options);
    });
