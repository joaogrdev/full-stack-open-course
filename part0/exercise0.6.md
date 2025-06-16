## 0.6: New note in Single page app diagram

sequenceDiagram
    participant browser
    participant server

    Note right of browser: A JavaScript function handles the form submission, preventing the default behavior (page reload).

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (JSON: { content, date })
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The browser updates the DOM with the new note without reloading the page.
