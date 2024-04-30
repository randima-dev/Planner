import ballerina/http;
import ballerina/io;
import ballerina/log;
import ballerina/time;

import wso2/choreo.sendemail as ChoreoEmail;

configurable string weddingItemsApiUrl = ?;

type WeddingItem record {
    string dateAdded;
    string email;
    int id;
    string itemName;
    string phoneNumber;
    string description;
};

public function main() returns error? {
    io:println("Wedding Items API URL: " + weddingItemsApiUrl);
    http:Client weddingItemsEndpoint = check new (weddingItemsApiUrl);

    // Fetching the new wedding items
    WeddingItem[] newItems = check weddingItemsEndpoint->get("/new-items");

    foreach WeddingItem item in newItems {
        // Sending an email to the user
        check sendEmail(item);
    }
}

function sendEmail(WeddingItem item) returns error? {
    // Format the date when item was added
    string formattedDateAdded = check formatDate(item.dateAdded);

    // Content of the email
    string finalContent = string `
Dear ${item.itemName} Enthusiast,

We are excited to inform you that a new item, "${item.description}", was added to our catalog on ${formattedDateAdded}.

Thank you for your continued interest in our wedding items. Please let us know how we can assist you further.

Warm regards,
The Wedding Items Team

---
`;

    ChoreoEmail:Client emailClient = check new ();
    string sendEmailResponse = check emailClient->sendEmail(item.email, "New Wedding Item Added!", finalContent);
    log:printInfo("Email sent successfully to: " + item.email + " with response: " + sendEmailResponse);
}

function formatDate(string utcTimeString) returns string|error {
    time:Utc utcTime = check time:utcFromString(utcTimeString);

    time:TimeZone zone = check new ("Asia/Colombo");
    time:Civil istTime = zone.utcToCivil(utcTime);

    string emailFormattedString = check time:civilToEmailString(istTime, time:PREFER_TIME_ABBREV);
    return emailFormattedString;
}
