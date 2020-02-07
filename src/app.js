'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({

    LAUNCH() {
        let speech = 'Please say your unique four digit pin code to gain access';
        let reprompt = 'incorrect pin';
        this.ask(speech, reprompt);
    },

    SecurityIntent() {
        if(this.$inputs.password.value === "threefivesixzero"){
            this.tell("congratulations you gained the access for ensemble service");
        }
    }
});


module.exports.app = app;
