# Example User Guide

Scenario: **How to create a subscription**

---

# How to create a subscription

## Overview

You will create a new subscription for a customer by choosing an active plan and confirming billing details. This guide is for billing operators and integrators using the admin console.

## Prerequisites

- You have permission to manage subscriptions in your organization.
- You have a valid customer account to attach the subscription to.
- At least one active plan exists in your environment.

## Steps

1. Sign in to the admin console and open **Billing** > **Subscriptions**.
2. Select **Create subscription**.
3. Choose the customer account from the directory.
4. Select an active **Plan** from the list (note the plan name and identifier shown in the details panel).
5. Review billing cadence and payment method, then select **Confirm**.

## Result

The new subscription appears in the subscription list with status **Active** (or **Pending** if your product requires payment confirmation). The subscription detail page shows the plan and start date.

## Additional Information

- If creation fails with an invalid plan message, see `kb/articles/subscription-error.md`.
- For API automation, align `planId` values with the catalog returned by your billing API; see `api/specs/openapi.yaml` when subscription endpoints are defined.
