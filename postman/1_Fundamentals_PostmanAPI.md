# Postman Fundamentals

Postman is a tool essential for testing and developing APIs.

## What Postman Is

Postman allows you to test your API endpoints without needing a frontend interface.

You don't need to wait for frontend developers to build the frontend before you can test your APIs — you can do that using Postman.

Postman allows you to send requests to APIs and see the response directly inside Postman.

**Download Postman:**

![Postman Interface](images/1_postmanInterface.png?v=2)

## Collections & Requests

Postman has many features, but for now we focus on **Collections** and **Requests**.

- To create a new collection: click **+** (Create new Collection) → **Blank Collection**.
- Once the collection is created, rename it (e.g. **Users**) to store all User-related APIs.
- Create another collection (e.g. **Products**) to store all Product-related APIs.

We haven't created any APIs of our own yet, so we search for **"JSON Placeholder"** — a free fake REST API (dummy API) to practice with.

---

## 1. GET API Call in Postman

Using the dummy Users API to check the response with the GET HTTP method.

Scroll down and click on the `/users` endpoint — the Users placeholder page opens:

![JSONPlaceholder Resources](images/2_jsonplaceholder.png?v=2)

![Users Placeholder](images/3_usersPlaceholder.png?v=2)

Copy the Users placeholder URL:

![User Placeholder Link](images/4_userPlaceholderLink.png?v=2)

> There are **10 users** in this dummy database.

Copy and paste the URL into the Postman GET request's URL field, as shown below:

![GET HTTP Request](images/5_GEThttpRequest.png?v=2)

Once everything is set, click **Send**. Output:

![GET HTTP Request Output](images/6_GEThttpRequestOutput.png?v=2)

In the Postman interface, you'll see the response of the GET Users API call. If you check the same URL in your browser, you'll notice the API response looks very similar to what Postman shows.

---

## 2. Create Users (POST)

Use the **POST** HTTP method in Postman to check whether an API can create data.

We need to send data in the **body** — whatever user information we want to create gets sent to the server in the request body.

In Postman: go to **Body** → select **raw** → select **JSON**.

![POST HTTP Method](images/7_POSThttpMethod.png?v=2)

Example request body (a simple User object):

```json
{
  "name": "Dhaval Trivedi",
  "email": "test@airtribe.live"
}
```

Click **Send**. If the request is successful, you'll see that this user (with name and email) has been created, and the response includes a new `"id"` (e.g. `id: 11`):

![POST HTTP Method Output](images/8_POSThttpMethodOutput.png?v=2)

> **Note:** Since this is a dummy API, it doesn't actually persist your data. So the next time you request the user with `id: 11`, you likely won't get a response — because it was never really saved.
>
> Once we go deeper and start building our own APIs, this behavior will make a lot more sense.

---

## Why Use Postman?

- Beyond sending requests, Postman is excellent for **organizing** your APIs for testing.
- You can create a collection for each aspect/area of your API.
- This makes it much easier to manage and test various endpoints.

---

This was a quick overview of getting started with Postman.