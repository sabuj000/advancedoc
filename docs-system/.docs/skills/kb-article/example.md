# Example KB Article

Below is a complete example for the scenario: **Unable to create subscription due to invalid plan ID**.

---

# Unable to create subscription due to invalid plan ID

## Scope

**Covers:** Errors returned when creating a subscription with a `planId` that does not exist or is not available to your account.

**Does not cover:** Payment failures, network timeouts, or permission errors unrelated to plan identifiers.

## Prerequisites

- You have API credentials or console access to view available plans.
- You know the `planId` value your integration sends in the create-subscription request.

## Problem Statement

When you call the create-subscription API or use the billing UI, the operation fails. The API returns a client error indicating an invalid plan identifier, or the UI shows a message that the selected plan is unavailable.

## Solution

Confirm that the `planId` matches an active plan returned by the plans catalog for your environment. Replace stale or typo’d IDs with a current value, then retry the create operation.

## Steps to Follow

1. Open the plans list for your environment (API or admin console).
2. Locate the plan you intend to sell and copy its exact `planId` string.
3. Compare it character by character with the value your app sends in the create-subscription request.
4. Update your configuration or request payload to use the valid `planId`.
5. Retry the create-subscription request and confirm you receive a success response.

## Expected Outcome

The subscription is created successfully. The response includes a subscription identifier and reflects the correct plan. No validation error references an unknown plan.

## Additional Resources

- User guide: `user-docs/guides/create-subscription.md`
- API: see subscription and plan operations in `api/specs/openapi.yaml` when those paths are documented for your product.
