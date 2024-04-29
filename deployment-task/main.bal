import ballerina/http;
import ballerina/io;
import ballerina/os;

// HTTP service configuration to listen for webhook events
service /webhook on new http:Listener(9090) {

    // Resource to handle POST requests from your version control system
    resource function post commit(http:Caller caller, http:Request req) {
        json|error payload = req.getJsonPayload();
        if (payload is json) {
            io:println("Received Commit: ", payload.toJsonString());
            // Assuming payload contains the necessary information
            string result = deployReactApp();
            http:Response res = new;
            res.setPayload("Deployment Triggered: " + result);
            var sendResult = caller->respond(res);
            if (sendResult is error) {
                io:println("Error sending response: ", sendResult.message());
            }
        } else {
            io:println("Error in fetching JSON payload: ", payload.message());
        }
    }
}

// Function to handle the deployment process
function deployReactApp() returns string {
    // Step 1: Build the React app
    string buildCommand = "npm run build";
    os:Process|error buildProcess = os:exec(buildCommand, {}, {}, ".");

    if (buildProcess is os:Process) {
        string buildOutput = check buildProcess.stdout();
        io:println("Build Output: ", buildOutput);
    } else {
        return "Failed to build the React app: " + buildProcess.message();
    }

    // Step 2: Deploy to WSO2 Choreo
    string deployCommand = "curl -X POST -F 'data=@./build' https://api.choreo.dev/deploy";
    os:Process|error deployProcess = os:exec(deployCommand, {}, {}, ".");

    if (deployProcess is os:Process) {
        string deployOutput = check deployProcess.stdout();
        io:println("Deploy Output: ", deployOutput);
        return "Deployment successful.";
    } else {
        return "Failed to deploy the React app: " + deployProcess.message();
    }
}

public function main() {
    io:println("Webhook server started listening on port 9090 ");
}
