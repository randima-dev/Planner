import ballerina/http;
import ballerina/task;
import ballerina/time;

// Constants for Choreo API
const string CHOREO_TOKEN = "67a7c119-c00e-4e23-a093-c4659a7eee9b";
const string CHOREO_API_ENDPOINT = "https://console.choreo.dev/organizations/choreocode/projects/98c44313-307a-44f8-beb0-2156b4f39bdf/components/ubmxnt/build";

// HTTP Client configuration
http:Client choreoClient = new (CHOREO_API_ENDPOINT, config = {
    auth: {
        token: CHOREO_TOKEN
    }
});

// Function to trigger the Choreo build and deployment
function triggerChoreoDeployment() returns error? {
    http:Response response = check choreoClient->post("/deployments", "Trigger Build and Deploy");
    if (response.statusCode == http:STATUS_OK) {
        io:println("Deployment triggered successfully.");
    } else {
        return error("Failed to trigger deployment: " + response.getJsonPayload().toString());
    }
}

// Scheduling the task
public function main() {
    task:JobId jobId = check task:scheduleJobOneTime(triggerChoreoDeployment, task:TimerConfiguration {
        initialDelay: 5,
        interval: 3600 // Interval in seconds (1 hour)
    });
    io:println("Deployment scheduler started.");
}
