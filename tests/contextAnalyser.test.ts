import ContextAnalyser from 'contextAnalyser';

it('should succeed', () => {
    console.log('Do I have any Intercom messages from high value customers waiting for a reply?');
    new ContextAnalyser('Do I have any Intercom messages from high value customers waiting for a reply?').analyse();
    console.log('--------------------------------------------');
    console.log('Send me a message 9 thousand and six 3 hundred weeks from now');
    new ContextAnalyser('Send me a message 9 thousand and six 3 hundred weeks from now').analyse();
    console.log('--------------------------------------------');
    console.log('show me my customers sorted by broccoli');
    new ContextAnalyser('show me my customers sorted by broccoli').analyse();
    console.log('--------------------------------------------');
    console.log('Also, send me a Slack message when a high value customer has an open ticket for A long time.');
    new ContextAnalyser('Also, send me a Slack message when a high value customer has an open ticket for A long time.').analyse();
    console.log('--------------------------------------------');
    console.log('Find all tweets containing the hashtag #trumpisfat and sort them by alphabetical order');
    new ContextAnalyser('Find all tweets containing the hashtag #trumpisfat and sort them by alphabetical order').analyse();
    console.log('--------------------------------------------');
    console.log('Do we have any outstanding invoices for this Salesforce account?');
    new ContextAnalyser('Do we have any outstanding invoices for this Salesforce account?').analyse();
    console.log('--------------------------------------------');
    console.log('Do I have 9 kg of fish in the fridge?');
    new ContextAnalyser('Do I have 9 kg of fish in the fridge?').analyse();
    console.log('--------------------------------------------');
    console.log('As soon as I get home, give a call to the 1st minister');
    new ContextAnalyser('Give a call to the 1st minister as soon as I get home').analyse();
    console.log('--------------------------------------------');
    console.log(' When I receive a message on Slack, send me a mail ');
    new ContextAnalyser(' When I receive a message on Slack, send me a mail ').analyse();
});