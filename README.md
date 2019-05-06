# Bk3-Ch12_PracticeWithBrowserifyAndModules

## Practice: Contact List

> The boilerplate repository does not include the task for starting a `json-server` API, so you need to add it for this parctice exercise. Add the following task to the `src/lib/grunt/aliases.yaml` file:
>
>    `- "bgShell:launchAPI"`
>
> Then make sure you add a `database.json` file to your `api` directory


Build four components:

1. A **ContactCollection** component that loads existing contacts from a `json-server` API, and saves new ones.
1. A **Contact** component that displays a person's name, phone number, and address.
1. A **ContactList** component that displays all contacts. It should import the **Contact** component and the **ContactCollection** component.
1. A **ContactForm** component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the **ContactCollection** component.

In `main.js`, import the **ContactList** component and the **ContactForm** component.

The user should see the contact form at the top of the view, and the list of contacts underneath it.

> **Bonus:** Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.
