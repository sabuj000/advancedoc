# How to create a subscription

## Overview

You will attach a billing plan to a customer and activate a subscription from the admin console. This guide is for operators who manage subscriptions day to day.

## Prerequisites

- Admin access to **Billing** > **Subscriptions**.
- A customer record ready to bill.
- At least one active plan configured in your environment.

## Steps

1. Sign in to the admin console.
2. Go to **Billing** > **Subscriptions**.
3. Select **Create subscription**.
4. Pick the customer from the directory.
5. Choose an active plan; note the plan identifier shown if you will mirror this in an API integration.
6. Confirm billing cadence and payment details as prompted.
7. Select **Confirm** to create the subscription.

## Result

The subscription appears in the list with the expected plan and status (**Active** or **Pending**, depending on payment confirmation rules in your product).

## Additional Information

- If you see an invalid plan error, read `kb/articles/subscription-error.md`.
- For programmatic creation, keep `planId` values synchronized with the catalog; see `api/specs/openapi.yaml` when subscription routes are added.
