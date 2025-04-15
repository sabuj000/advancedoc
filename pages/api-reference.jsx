import ApiRequest from '../components/ApiRequest'
import ApiResponse from '../components/ApiResponse'

# 📘 Create a Campaign API

Use this endpoint to create a new Campaign.

## Headers

Authorization: Bearer &lt;token&gt;
Content-Type: application/json


## Endpoint

`POST /accounts/{account_id}/campaigns`

## Sample Request

<ApiRequest>
{`
{
  "campaign": {
    "name": "Homepage Experiment",
    "goal_ids": [101, 102],
    "status": "running"
  }
}
`}
</ApiRequest>

## Sample Response

<ApiResponse>
{`
{
  "campaign": {
    "id": 12345,
    "name": "Homepage Experiment",
    "status": "running",
    "created_at": "2025-04-15T10:00:00Z"
  }
}
`}
</ApiResponse>


> 🚀 Tip: You must include at least one goal ID to create a valid campaign.
