const https = require('https');

exports.handler = async function (event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);

    // Default to a placeholder if the env variable isn't set
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://httpbin.org/post';

    // Format the payload to exactly match the Retell AI schema 
    // described in backend_architecture.md
    const retellPayload = {
      event: "call_ended",
      call: {
        call_id: "web_lead_" + Date.now(),
        agent_id: "bookedsolid_contact_form",
        call_analysis: {
          "user_sentiment": "Positive",
          "call_successful": true,
          custom_analysis_data: {
            caller_type: "Website Lead",
            location: formData.location || "Unknown",
            weekly_patient_volume: formData.service || "Unknown",
            email_address: formData.email,
            phone_number: formData.phone || "No phone provided",
            name: formData.name,
            message: formData.message
          }
        }
      }
    };

    // Forward to n8n Webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(retellPayload)
    });

    if (!response.ok) {
        console.error("n8n webhook error:", await response.text());
        return { statusCode: 500, body: 'Failed to trigger automation workflow' };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Lead successfully routed to backend." })
    };

  } catch (error) {
    console.error("Webhook Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
